from bs4 import BeautifulSoup
from datetime import datetime
from dotenv import load_dotenv
from scrapeops_python_requests.scrapeops_requests import ScrapeOpsRequests
from transformers import GPT2Tokenizer
from urllib.parse import urlencode
import base64
import json
import mysql.connector
import openai
import os
import requests

# Set up database connection
db = mysql.connector.connect(
    host=os.getenv("WORK_WP_DBMS_HOST"),
    user=os.getenv("WORK_WP_DBMS_USERNAME"),
    password=os.getenv("WORK_WP_DBMS_PASSWORD"),
    database=os.getenv("WORK_WP_DBMS_DATABASE")
)
cursor = db.cursor()

# Load OpenAI API key from .env file
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")
model = 'gpt-4-1106-preview'

taxonomy = """
The hierarchical taxonomy for classifying articles in enterprise IT and AI consists of the following top-level and secondary categories: 
1. Ethical and Responsible AI: Ethics of Enterprise AI, Responsible AI Practices, Data Governance for Enterprise AI, AI Governance Frameworks.
2. AI for Human Advancement: Employee Performance Analytics with AI, Personalized Learning with Enterprise AI, Enterprise AI for Talent Management, Building an AI Workforce.
3. Practical AI Applications: Anomaly Detection for Cybersecurity, Supply Chain Optimization with AI, Predictive Maintenance with AI, Enterprise AI for Sales Forecasting.
4. AI Strategy and Governance: Best Practices for AI Adoption, Calculating AI ROI, Enterprise Risk Management with AI, Future of Enterprise AI.
5. AI Development and Operations: AI Development Tools, AI-Assisted Programming, Automated Code Refactoring, MLOps and Model Management.
6. AI in Communication and Engagement: Chatbots and Conversational AI, Customer Segmentation with AI, Voice Assistants in Enterprise, Recommendation Systems for Customer Experience.
7. AI and Automation: Robotic Process Automation, Cloud Infrastructure Automation, Incident Response Automation, Continuous Integration and Delivery Pipelines.
8. AI for Data and Analytics: Big Data Analytics for Enterprise AI, Data Pipeline Optimization, Data Management for Enterprise AI, Machine Learning Techniques.
9. Advanced AI Topics: Deep Learning Models, Natural Language Processing, Computer Vision Innovations, Generative AI Applications.
10. Community and Culture: Elevating Workforces with AI Education, Vendor-Independent AI Communities, Compassionate AI Trailblazing, Uplifting Work Different with AI Stories.
"""
categories = """
"AI Business Apps" covers how enterprises are leveraging AI to optimize key business functions like sales, marketing, customer service, and operations. "AI for IT" explores applications of AI to streamline software development, cybersecurity, cloud operations, and other information technology workflows. "AI News" provides the latest updates on artificial intelligence innovations, products, research, and industry applications. "AI Strategy & Governance" discusses best practices for developing ethical, responsible AI initiatives across enterprise functions. "Compassionate AI" explores ways to develop artificial intelligence aligned with human values like fairness, transparency, and inclusiveness. "Enterprise AI" provides an overview of how organizations are adopting AI across departments and workflows. "Ethical AI" discusses responsible practices for AI, including bias mitigation, transparency, and governance. "Site News" covers updates and announcements related to the publication itself.'
"""


def extract_json_ld(url):
    try:
        response = requests.get(url)
        print(f"Response: {response.status_code}")
        response.raise_for_status()  # Check if the request was successful
    except requests.RequestException as e:
        print(f"Failed to retrieve URL: {e}")
        return []

    try:
        soup = BeautifulSoup(response.text, 'html.parser')
        json_ld_data = []
        for script in soup.find_all('script', {'type': 'application/ld+json'}):
            data = script.string.strip()
            if data:
                json_ld_data.append(json.loads(data))
        return json_ld_data
    except (ValueError, json.JSONDecodeError) as e:
        print(f"Failed to parse JSON-LD: {e}")
        return []


def remove_html_markup(text):
    soup = BeautifulSoup(text, "html.parser")
    return soup.get_text()


def truncate_text(text, max_tokens=3750):
    tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
    tokens = tokenizer.encode(
        text, return_tensors="pt", max_length=max_tokens, truncation=True)
    truncated_text = tokenizer.decode(tokens[0], skip_special_tokens=True)
    return truncated_text


def enrich_post(post_title, post_content):
    print(f"Enriching post {post_title}")
    clean_content = remove_html_markup(post_content)
    truncated_content = truncate_text(post_title+' '+clean_content)

    # Prepare the chat messages
    messages = [
        {"role": "system", "content": "You are a specialized language model tasked with summarizing and classifying academic and news articles based on a predefined hierarchical taxonomy of enterprise IT and AI topics. The taxonomy includes various top-level and secondary categories."},
        {"role": "user", "content": f"Extract 5 keywords in a comma-separated list without numbers from the following text. Look for keywords which may have already been identified: {truncated_content}"},
    ]

    # Extract keywords+
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,

    )
    keywords = response.choices[0].message['content'].strip()
    print(f"Keywords: {keywords}")

    # Create summary
    messages.append(
        {"role": "user",
         "content": f"Write a one-paragraph summary of the previous text."})
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
    )
    summary = response.choices[0].message['content'].strip()
    summary = summary.replace('"', '')  # remove double quotes
    print(f"Summary: {summary}")

    # Create SEO description
    messages.append(
        {"role": "user",
         "content": f"Write an SEO-friendly description of the previous text in less than 25 words or 200 characters."})
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
    )
    description = response.choices[0].message['content'].strip()
    description = description.replace('"', '')  # remove double quotes
    print(f"SEO Description: {description}")

    # Create articleSection
    messages.append(
        {"role": "user", "content": f"Classify this article based on the hierarchical taxonomy of enterprise IT and AI topics. First, identify the top-level category and then the secondary category if applicable. When responding, only respond in this format without further commentary. Only respond in this format: "'Primary Category`; `Secondary Category'", where `Primary Category` and `Secondary Category` are template placeholders only. Here is the taxonomy: {taxonomy}"})
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
    )
    classification = response.choices[0].message['content'].strip()
    print(f"classification: {classification}")
    primary_classification, secondary_classification = classification.split(
        ';')
    primary_classification = primary_classification.strip()
    secondary_classification = secondary_classification.strip()
    print(f"articleSection: {secondary_classification}")
    result = {
        "articleSection": secondary_classification,
        "classification": classification,
        "description": description,
        "extractedText": clean_content,
        "keywords": keywords,
        "summary": summary,
    }
    return result

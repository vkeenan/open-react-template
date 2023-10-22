import type { Metadata } from "next";
import { defaultMetadata, siteSettings } from "@/data/site-metadata";
export type JsonSchemaDataParams = {
  articleId?: string;
  articleSection?: string[];
  authorDescription?: string;
  authorId?: string;
  authorImageCaption?: string;
  authorImageId?: string;
  authorImageUrl?: string;
  authorName?: string;
  authorSocialProfiles?: string[];
  authorUrl?: string;
  breadcrumbId?: string;
  breadcrumbs?: any[]; // Define a specific type if you have a clear structure for breadcrumbs
  commentActionTarget?: string;
  commentCount?: number;
  copyrightYear?: string;
  dateModified?: string;
  datePublished?: string;
  description?: string;
  headline?: string;
  imageCaption?: string;
  imageHeight?: number;
  imageWidth?: number;
  inLanguage?: string;
  keywords?: string[];
  logoCaption?: string;
  logoHeight?: number;
  logoWidth?: number;
  pageId?: string;
  pageName?: string;
  pageUrl?: string;
  primaryImageId?: string;
  primaryImageUrl?: string;
  publisherId?: string;
  publisherLogoId?: string;
  publisherLogoUrl?: string;
  publisherName?: string;
  publisherSocialProfiles?: string[];
  publisherUrl?: string;
  searchUrlTemplate?: string;
  thumbnailUrl?: string;
  websiteDescription?: string;
  websiteId?: string;
  websiteName?: string;
  websiteUrl?: string;
  wordCount?: number;
};

export function getJsonSchema(post: any) {
  const jsonData: JsonSchemaDataParams = {
    articleId: `${siteSettings.siteUrl}/posts/${post.slug}`,
    articleSection: post.openAiArticleSection,
    authorDescription: post.author?.description,
    authorId: post.author?.url,
    authorImageCaption: "", // If the author's image caption is not available, you can leave it as an empty string.
    authorImageId: post.author?.avatar.id,
    authorImageUrl: post.author?.avatar.url,
    authorName: post.author?.name,
    authorSocialProfiles: post.author?.socialProfiles,
    authorUrl: post.author?.url,
    commentActionTarget: '', // You need to fetch the comment action target, or set it to an empty string if comments are not supported.
    commentCount: 0, // You need to fetch the comment count, or set it to 0 if comments are not supported.
    copyrightYear: new Date(post.date).getFullYear().toString(),
    dateModified: post.modifiedGmt + 'Z',
    datePublished: post.dateGmt + 'Z',
    description: post.openAISummary,
    headline: post.title,
    inLanguage: "en", // You can replace this with the actual language of the content, if available.
    keywords: post.openAiKeywords,
    logoCaption: siteSettings.logoCaption,
    logoHeight: siteSettings.logoHeight,
    logoWidth: siteSettings.logoWidth,
    pageId: `${siteSettings.siteUrl}/posts/${post.slug}`,
    primaryImageId: post.featuredImage?.sourceUrl,
    publisherId: siteSettings.siteUrl,
    publisherLogoId: siteSettings.publisherLogoId,
    publisherLogoUrl: siteSettings.publisherLogoUrl,
    publisherName: siteSettings.publisherName,
    publisherSocialProfiles: siteSettings.publisherSocialProfiles,
    publisherUrl: siteSettings.publisherUrl,
    searchUrlTemplate: `${siteSettings.siteUrl}/search?q={search_term_string}`,
    thumbnailUrl: post.featuredImage?.sourceUrl,
    websiteDescription: siteSettings.description,
    websiteName: siteSettings.title,
    websiteId: siteSettings.siteId,
    websiteUrl: siteSettings.siteUrl,
    wordCount: post.content?.split(' ').length,
  };
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": jsonData.articleId,
        "articleSection": jsonData.articleSection,
        "author": { "name": jsonData.authorName, "@id": jsonData.authorId },
        "commentCount": jsonData.commentCount,
        "copyrightHolder": { "@id": jsonData.publisherId },
        "copyrightYear": jsonData.copyrightYear,
        "dateModified": jsonData.dateModified,
        "datePublished": jsonData.datePublished,
        "headline": jsonData.headline,
        "image": { "@id": jsonData.primaryImageId },
        "inLanguage": jsonData.inLanguage,
        "isPartOf": { "@id": jsonData.pageId },
        "keywords": jsonData.keywords,
        "description:": jsonData.description,
        "mainEntityOfPage": { "@id": jsonData.pageId },
        "publisher": { "@id": jsonData.publisherId },
        "thumbnailUrl": jsonData.thumbnailUrl,
        "wordCount": jsonData.wordCount,
        "potentialAction": [
          {
            "@type": "CommentAction",
            "name": "Comment",
            "target": [jsonData.commentActionTarget],
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": jsonData.pageId,
        "url": jsonData.pageUrl,
        "name": jsonData.pageName,
        "isPartOf": { "@id": jsonData.websiteId },
        "primaryImageOfPage": { "@id": jsonData.primaryImageId },
        "image": { "@id": jsonData.primaryImageId },
        "thumbnailUrl": jsonData.thumbnailUrl,
        "datePublished": jsonData.datePublished,
        "dateModified": jsonData.dateModified,
        "description": jsonData.description,
        "breadcrumb": { "@id": jsonData.breadcrumbId },
        "inLanguage": jsonData.inLanguage,
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [jsonData.pageUrl],
          },
        ],
      },
      {
        "@type": "ImageObject",
        "inLanguage": jsonData.inLanguage,
        "@id": jsonData.primaryImageId,
        "url": jsonData.primaryImageUrl,
        "contentUrl": jsonData.primaryImageUrl,
        "width": jsonData.imageWidth,
        "height": jsonData.imageHeight,
        "caption": jsonData.imageCaption,
      },
      {
        "@type": "BreadcrumbList",
        "@id": jsonData.breadcrumbId,
        "itemListElement": jsonData.breadcrumbs,
      },
      {
        "@type": "WebSite",
        "@id": jsonData.websiteId,
        "url": jsonData.websiteUrl,
        "name": jsonData.websiteName,
        "description": jsonData.websiteDescription,
        "publisher": { "@id": jsonData.publisherId },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": jsonData.searchUrlTemplate,
            },
            "query-input": "required name=search_term_string",
          },
        ],
        "inLanguage": jsonData.inLanguage,
      },
      {
        "@type": "Organization",
        "@id": jsonData.publisherId,
        "name": jsonData.publisherName,
        "url": jsonData.publisherUrl,
        "logo": {
          "@type": "ImageObject",
          "inLanguage": jsonData.inLanguage,
          "@id": jsonData.publisherLogoId,
          "url": jsonData.publisherLogoUrl,
          "contentUrl": jsonData.publisherLogoUrl,
          "width": jsonData.logoWidth,
          "height": jsonData.logoHeight,
          "caption": jsonData.logoCaption,
        },
        "image": { "@id": jsonData.publisherLogoId },
        "sameAs": jsonData.publisherSocialProfiles,
      },
      {
        "@type": "Person",
        "@id": jsonData.authorId,
        "name": jsonData.authorName,
        "image": {
          "@type": "ImageObject",
          "inLanguage": jsonData.inLanguage,
          "@id": jsonData.authorImageId,
          "url": jsonData.authorImageUrl,
          "contentUrl": jsonData.authorImageUrl,
          "caption": jsonData.authorImageCaption,
        },
        "description": jsonData.authorDescription,
        "sameAs": jsonData.authorSocialProfiles,
        "url": jsonData.authorUrl,
      },
    ],
  };
  return schema;
}
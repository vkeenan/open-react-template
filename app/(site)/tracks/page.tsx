export default function Tracks() {
  const tracks = [
    {
      fullTitle:
        "Unlocking Enterprise Value with Prompt Engineering Platforms (PEPs)",
      shortTitle: "Unlocking Value with PEPs",
      icon: "🛠️",
      description:
        "This track demystifies the Prompt Engineering Platform (PEP) by offering actionable insights into how enterprises can automate and optimize workflows. Learn how PEPs are revolutionizing activities like customer service, document creation, and data processing, and understand how these platforms can be implemented to drive tangible business value.",
    },
    {
      fullTitle:
        "The Future is Now: Realizing the Potential of Executive Thinking Partners (ETPs)",
      shortTitle: "The Power of ETPs",
      icon: "💡",
      description:
        "Executive Thinking Partners (ETPs) are no longer just a concept; they are becoming a reality. This track focuses on the cutting-edge technology behind ETPs and how they can augment high-level strategic planning and decision-making processes. Learn what it takes to implement an ETP and the benefits they can bring to your organization.",
    },
    {
      fullTitle:
        "Secure Your Data, Secure Your Future: Mastering AI Data Safety and Security",
      shortTitle: "AI Data Safety",
      icon: "🔒",
      description:
        "Data security is paramount in any AI implementation. This track offers a comprehensive guide to best practices for securing your data in various AI applications. From encryption techniques to governance policies, gain the expertise needed to protect your most valuable asset—your data.",
    },
    {
      fullTitle:
        "AI for the Greater Good: Navigating the Ethical Landscape of AI Implementation",
      shortTitle: "Ethical AI",
      icon: "⚖️",
      description:
        "Ethics in AI is more than just a buzzword—it's a necessity. This track dives deep into the ethical considerations of AI implementation, from mitigating biases to ensuring responsible use. Learn how to navigate the ethical complexities to make AI work for everyone.",
    },
    {
      fullTitle:
        "A Humane Approach to Enterprise AI: Empowering Individuals for Workplace Success",
      shortTitle: "Humane AI",
      icon: "🤲",
      description:
        "This track introduces a people-centric philosophy for AI in the enterprise, emphasizing individual empowerment and career growth. Discover how AI can open doors to new workplace opportunities, subtly shifting the narrative away from merely being a cost-cutting tool.",
    },
    {
      fullTitle:
        "From Chaos to Clarity: Navigating the Complex World of AI Risk Management",
      shortTitle: "AI Risk Management",
      icon: "⚠️",
      description:
        "Managing risks in AI projects is often overlooked but critically important. This track provides a roadmap for navigating the various risks associated with AI, from data security to ethical considerations. Learn how to identify, assess, and mitigate risks to ensure a successful AI project.",
    },
    {
      fullTitle:
        "Scaling Smartly: Optimizing AI Infrastructure and Operations for Growth",
      shortTitle: "Scaling AI",
      icon: "📈",
      description:
        "Scaling AI operations is a complex but rewarding endeavor. This track dives into the technical aspects of scaling AI, from choosing the right hardware and software to optimizing algorithms for performance. Learn how to scale your AI operations efficiently without compromising quality.",
    },
    {
      fullTitle:
        "AI in Action: Exploring Industry-Specific Applications and Solutions",
      shortTitle: "Industry-Specific AI",
      icon: "🏥🛒🏦",
      description:
        "AI is not a one-size-fits-all solution; it needs to be tailored to specific industry needs. This track explores the unique applications of AI in various sectors, from healthcare and finance to retail and manufacturing. Gain practical insights into how AI can revolutionize your industry.",
    },
  ];
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-display">Conference Tracks</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
        {tracks.map((track, index) => (
          <div key={index} className="p-4 space-y-4 border rounded-md">
            <div className="flex flex-col items-center md:flex-row md:space-x-4">
              <div className="text-4xl">
                {track.icon} {/* Make sure to replace with actual icon */}
              </div>
              <div>
                <h2 className="text-xl font-display">{track.shortTitle}</h2>
                <h3 className="text-lg italic">{track.fullTitle}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

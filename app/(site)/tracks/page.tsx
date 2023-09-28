export default function Tracks() {
  const tracks = [
    {
      shortTitle: "Data Security",
      fullTitle:
        "Secure Your Data, Secure Your Future: AI Data Safety and Security",
      description:
        "This track focuses on best practices for ensuring data security and privacy in AI implementations.",
      icon: "🔒", // Replace with your actual icon
    },
    {
      shortTitle: "Ethical AI",
      fullTitle: "AI for the Greater Good: Ethical AI Implementation",
      description:
        "Navigate the ethical landscape of AI with sessions on bias prevention, fairness, and responsible AI use.",
      icon: "⚖️", // Replace with your actual icon
    },
    {
      shortTitle: "AI Governance",
      fullTitle: "Lead with Governance: AI Governance Solutions",
      description:
        "Master the art of AI governance with comprehensive discussions on policy frameworks, compliance, and accountability.",
      icon: "🏛️", // Replace with your actual icon
    },
    {
      shortTitle: "Risk Management",
      fullTitle: "From Chaos to Clarity: AI Risk Management",
      description:
        "Address the complexities of AI risks such as model transparency, data breaches, and ethical considerations.",
      icon: "⚠️", // Replace with your actual icon
    },
    {
      shortTitle: "Human-Centric AI",
      fullTitle: "People-First AI: Human-Centric Design and Usability",
      description:
        "Put people at the heart of your AI projects with this track focused on user experience, accessibility, and human-AI interaction.",
      icon: "👥", // Replace with your actual icon
    },
    {
      shortTitle: "AI Infrastructure",
      fullTitle: "Scaling Smartly: AI Infrastructure and Operations",
      description:
        "This track will dive into the technical aspects of AI, from choosing the right hardware and software to scaling your AI operations efficiently.",
      icon: "📈", // Replace with your actual icon
    },
    {
      shortTitle: "Enterprise AI",
      fullTitle: "Unlock Business Value: AI for Enterprise Transformation",
      description:
        "Understand how AI can drive organizational change, improve ROI, and create new business models.",
      icon: "🔑", // Replace with your actual icon
    },
    {
      shortTitle: "Industry Applications",
      fullTitle: "AI in Action: Industry-Specific Applications",
      description:
        "Explore how AI is revolutionizing various industries, from healthcare and finance to retail and manufacturing.",
      icon: "🏭", // Replace with your actual icon
    },
    {
      shortTitle: "AI Analytics",
      fullTitle: "From Data to Decisions: AI Analytics and Decision Making",
      description:
        "Harness the power of AI to make smarter business decisions.",
      icon: "📊", // Replace with your actual icon
    },
    {
      shortTitle: "AI Trends",
      fullTitle: "The Future is Now: AI Trends and Innovations",
      description:
        "Stay ahead of the curve with this track that looks at emerging AI technologies, research breakthroughs, and future trends.",
      icon: "🚀", // Replace with your actual icon
    },
  ];
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-diplay">Conference Tracks</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track, index) => (
          <div key={index} className="p-4 space-y-4 border rounded-md">
            <div className="flex flex-col items-center md:flex-row md:space-x-4">
              <div className="text-4xl">
                {track.icon} {/* Make sure to replace with actual icon */}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{track.shortTitle}</h2>
                <h3 className="text-lg">{track.fullTitle}</h3>
                <p className="text-sm">{track.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

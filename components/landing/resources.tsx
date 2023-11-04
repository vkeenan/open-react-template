export default function Resources() {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Resource Highlights</h1>
        <hr className="w-1/4 mx-auto my-4 border-t-2" />
      </div>

      {/* Introduction */}
      <div className="mb-8 text-center">
        <p className="w-1/2 mx-auto text-lg font-semibold">
          Expand your knowledge and stay updated with Vernon Keenan&apos;s
          thought leadership across various platforms. Here are some resources
          you won&apos;t want to miss.
        </p>
      </div>

      {/* Resource Cards */}
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {/* LinkedIn */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <h2 className="mb-4 text-xl font-semibold">LinkedIn</h2>
          <p>
            Follow Vernon Keenan on LinkedIn for in-depth articles and industry
            updates.
          </p>
          <a href="#" className="inline-block mt-4 text-blue-500">
            Follow on LinkedIn
          </a>
        </div>

        {/* Instagram */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <h2 className="mb-4 text-xl font-semibold">Instagram</h2>
          <p>
            Get a behind-the-scenes look at Vernon&apos;s research and speaking
            engagements.
          </p>
          <a href="#" className="inline-block mt-4 text-blue-500">
            Follow on Instagram
          </a>
        </div>

        {/* Newsletter Archives */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <h2 className="mb-4 text-xl font-semibold">Newsletter Archives</h2>
          <p>
            Missed a newsletter? Browse our archives for past insights on
            Enterprise AI.
          </p>
          <a href="#" className="inline-block mt-4 text-blue-500">
            View Archives
          </a>
        </div>

        {/* Security Drops TikTok Channel */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <h2 className="mb-4 text-xl font-semibold">
            Security Drops TikTok Channel
          </h2>
          <p>
            Short, impactful videos about Enterprise AI and security. A
            must-follow!
          </p>
          <a href="#" className="inline-block mt-4 text-blue-500">
            Follow on TikTok
          </a>
        </div>

        {/* YouTube Channel */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <h2 className="mb-4 text-xl font-semibold">YouTube Channel</h2>
          <p>
            In-depth webinars, interviews, and tutorials focused on pragmatic AI
            adoption.
          </p>
          <a href="#" className="inline-block mt-4 text-blue-500">
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

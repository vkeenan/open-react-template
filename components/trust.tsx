export default function Trust() {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Trust in Experience</h1>
        <hr className="w-1/4 mx-auto my-4 border-t-2" />
      </div>

      {/* Introductory Text */}
      <div className="mb-8 text-center">
        <p className="w-1/2 mx-auto text-lg font-semibold">
          From the advent of the PC revolution to the ongoing wave of Enterprise
          AI, Vernon Keenan has been a pioneering force. Here's why you can
          trust in his experience.
        </p>
      </div>

      {/* Timeline Component */}
      <div className="container grid grid-cols-1 gap-8 mx-3 mb-8 md:grid-cols-2">
        {/* Timeline details */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">Career Milestones:</h2>
          <ul className="list-decimal list-inside">
            <li>
              IBM 1401 & HP-35: Early exposure to computing, setting the
              foundation.
            </li>
            <li>
              Northwestern University: Worked with Apple II, and the first
              Macintosh and Lisa computers.
            </li>
            <li>
              SIR Database: Academic and clinical research in Spinal Cord
              Injury.
            </li>
            <li>
              Genentech to Oracle: From evaluating clinical trials software to
              business development.
            </li>
            <li>
              Industry Analyst: First to identify eBay's potential, founded
              Keenan Vision.
            </li>
            <li>
              Telnexus: Entrepreneurial journey as CEO and financial operator.
            </li>
            <li>Taxation Engine: Innovating in Go and Kubernetes.</li>
            <li>
              SalesforceDevops.net: Filling a gap in the Salesforce devops
              space.
            </li>
            <li>Enterprise AI: A leading expert and educator.</li>
          </ul>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">
            What People Are Saying:
          </h2>
          <blockquote className="pl-4 mb-4 border-l-4 border-blue-500">
            <p>
              "Vernon's insights into eBay changed how we looked at commerce
              platforms."
            </p>
            <footer>— Industry Peer</footer>
          </blockquote>
          <blockquote className="pl-4 border-l-4 border-blue-500">
            <p>
              "His ability to turn complex technologies into actionable
              strategies is phenomenal."
            </p>
            <footer>— Former Client</footer>
          </blockquote>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <button className="px-8 py-2 text-white bg-bourbon-500 rounded-lg hover:bg-bourbon-600">
          Explore the Course on 'Evaluating Enterprise AI Adoption Strategies'
        </button>
      </div>
    </div>
  );
}

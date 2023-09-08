import IconCommunity from "@/public/images/icon-community.png";
import IconCompass from "@/public/images/icon-compass.png";
import IconCop from "@/public/images/icon-cop.png";
import Image from "next/image";

export default function Why() {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center">
        <h1 className="mx-3 text-3xl font-semibold">
          Why Work Different with AI?
        </h1>
        <hr className="w-1/4 mx-auto my-4 border-t-2" />
      </div>

      {/* Content Cards */}
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        {/* Card 1: Innovate Responsibly */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image src={IconCop} alt="Innovate Responsibly" height={200} />
          </div>
          <h2 className="mb-4 text-xl font-semibold">Innovate Responsibly</h2>
          <p>
            AI has the power to revolutionize the way we work, but with great
            power comes great responsibility. At WorkDifferentWithAI, we believe
            that innovation shouldn’t come at the expense of ethics or social
            responsibility.
          </p>
        </div>

        {/* Card 2: Positive Change for All */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image
              src={IconCommunity}
              alt="Positive Change for All"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-xl font-semibold">
            Positive Change for All
          </h2>
          <p>
            We are committed to driving positive change that benefits not just
            businesses but also employees and society at large. Our focus is on
            human-centric AI solutions that empower rather than replace the
            workforce.
          </p>
        </div>

        {/* Card 3: Your Compass Through the AI Landscape */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image
              src={IconCompass}
              alt="Your Compass Through the AI Landscape"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-xl font-semibold">
            Your Compass Through the AI Landscape
          </h2>
          <p>
            The landscape of AI is vast and often confusing. We serve as your
            trusted guide, helping you navigate through the hype to find
            practical, effective solutions tailored for your enterprise needs.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <button className="px-8 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Learn How We Can Guide You
        </button>
      </div>
    </div>
  );
}

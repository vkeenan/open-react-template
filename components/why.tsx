import IconCommunity from "@/public/images/icon-community.png";
import IconExclusiveContent from "@/public/images/icon-exclusive-content.png";
import IconCompass from "@/public/images/icon-compass.png";
import IconCop from "@/public/images/icon-cop.png";
import Image from "next/image";
import Link from "next/link";

export default function Why() {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="mx-3 text-4xl md:text-5xl font-display">
          Why Join Work Different with AI?
        </h2>
        <hr className="w-1/4 mx-auto my-4 border-t-2" />
      </div>

      {/* Content Cards */}
      <div className="container grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
        <div className="p-6 m-2 rounded-lg shadow-md bg-cocoa_brown-700">
          <div className="flex justify-center mb-4">
            <Image
              src={IconExclusiveContent}
              alt="Innovate Responsibly"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-3xl text-gray-200 font-display">
            Access to Exclusive Content
          </h2>
          <p className="text-gray-100">
            Dive deep into curated educational tracks focused on practical AI
            adoption and ethical considerations.
          </p>
        </div>

        <div className="p-6 m-2 rounded-lg shadow-md bg-cocoa_brown-700">
          <div className="flex justify-center mb-4">
            <Image
              src={IconCommunity}
              alt="Community Engagement"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-3xl text-gray-200 font-display">
            Community Engagement
          </h2>
          <p className="text-gray-100">
            Connect with like-minded professionals, share insights, and work
            together to drive positive AI outcomes.
          </p>
        </div>

        <div className="p-6 m-2 rounded-lg shadow-md bg-cocoa_brown-700">
          <div className="flex justify-center mb-4">
            <Image
              src={IconCompass}
              alt="Your Compass Through the AI Landscape"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-3xl text-gray-200 font-display">
            Thought Leadership
          </h2>
          <p className="text-gray-100">
            Learn from industry experts, contribute your knowledge, and
            establish yourself as a thought leader in the AI space.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <Link
          className="px-4 py-2 text-2xl text-white rounded-lg bg-bourbon-500 hover:bg-bourbon-600"
          href="/sign-up"
        >
          Join the Work Different With AI Community Today
        </Link>
      </div>
    </div>
  );
}

import IconWisdom from "@/public/images/icon-wisdom2.png";
import IconEthics from "@/public/images/icon-ethics.png";
import IconCustomized from "@/public/images/icon-customized.png";
import IconTrack from "@/public/images/icon-track.png";
import IconTraining from "@/public/images/icon-training.png";
import Image from "next/image";
import Link from "next/link";

export default function How() {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center">
        <h1 className="mx-3 text-4xl md:text-5xl font-display">
          How We Guide You
        </h1>
        <hr className="w-1/4 mx-auto my-4 border-t-2" />
      </div>

      <div className="container grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
        <div className="p-6 m-2 rounded-lg shadow-md bg-cocoa_brown-700">
          <div className="flex justify-center mb-4">
            <Image
              src={IconTrack}
              alt="Virtual Conference Tracks"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-3xl text-gray-200 font-display">
            Virtual Conference Tracks
          </h2>
          <p className="text-gray-100">
            Join our virtual conference tracks to learn from industry experts,
            help to moderate discussions, and share your own insights.
          </p>
          <Link
            className="px-2 text-gray-700 bg-bourbon-200 hover:bg-cocoa_brown-800 hover:text-white"
            href="/tracks"
          >
            See Tracks
          </Link>
        </div>
        <div className="p-6 m-2 rounded-lg shadow-md bg-cocoa_brown-700">
          <div className="flex justify-center mb-4">
            <Image src={IconEthics} alt="Ethical Frameworks" height={200} />
          </div>
          <h2 className="mb-4 text-3xl text-gray-200 font-display">
            Consulting Engagements
          </h2>
          <p className="text-gray-100">
            Do you need help with how to work with AI today? Check out our
            Consulting page for more information on community members offering
            their services.
          </p>
          <Link
            className="px-2 text-gray-700 bg-bourbon-200 hover:bg-cocoa_brown-800 hover:text-white"
            href="/consulting"
          >
            See Consulting
          </Link>
        </div>
        <div className="p-6 m-2 rounded-lg shadow-md bg-cocoa_brown-700">
          <div className="flex justify-center mb-4">
            <Image src={IconCustomized} alt="Company Workshops" height={200} />
          </div>
          <h2 className="mb-4 text-3xl text-gray-200 font-display">
            Enterprise AI Workshops
          </h2>
          <p className="text-gray-100">
            Work Different With AI experts offer customized workshops for your
            team. We can help you get started with AI, or help you to improve
            your existing AI practices.
          </p>
          <Link
            className="px-2 text-gray-700 bg-bourbon-200 hover:bg-cocoa_brown-800 hover:text-white"
            href="/workshops"
          >
            See Workshops
          </Link>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <Link
          href="/sign-up"
          className="px-8 py-2 text-2xl text-white rounded-lg bg-bourbon-500 hover:bg-bourbon-600"
        >
          Get Started on Your AI Journey
        </Link>
      </div>
    </div>
  );
}

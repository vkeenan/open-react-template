import VimeoPlayer from "@/components/vimeo-player";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        {/* Hero content */}
        <div className="relative pt-2 pb-4">
          {/* Section header */}
          <div className="max-w-3xl pb-4 mx-auto ">
            <h2 className="mt-4 text-4xl text-center lg:text-5xl font-display">
              Work Different With AI for an Ethical and Compassionate Future
            </h2>
          </div>
          {/* Container for video and text */}
          <div className="grid items-start grid-cols-1 mx-auto max-w-7xl">
            {/* Video */}
            <div className="flex justify-center">
              <VimeoPlayer vertVideoId="867571528" horizVideoId="870132959" />
            </div>
            {/* Right Column */}
            <div className="space-y-4 ">
              <div className="text-center md:text-center font-display">
                <h3 className="mt-5 text-4xl lg:text-5xl font-display">
                  Elevate Your Enterprise AI Journey
                </h3>
              </div>
              <div className="text-center md:text-center">
                <p className="text-2xl">
                  Join a community dedicated to exploring compassionate and
                  ethical AI practices. Sign up to engage, learn, and
                  contribute.{" "}
                  <Link
                    className="px-2 text-gray-700 bg-bourbon-200 hover:bg-cocoa_brown-800 hover:text-white"
                    href="/sign-up"
                  >
                    Click Here
                  </Link>{" "}
                  to begin your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

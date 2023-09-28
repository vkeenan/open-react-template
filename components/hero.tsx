import VimeoPlayer from "@/components/vimeo-player";

export default function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        {/* Hero content */}
        <div className="relative pt-2 pb-4">
          {/* Section header */}
          <div className="max-w-3xl pb-4 mx-auto text-center font-display">
            <h1 className="mt-4 mb-2 h2">
              Work Different with AI
              <br />
              For An Ethical and Humane Future
            </h1>
          </div>
          {/* Container for video and text */}
          <div className="grid items-center grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2">
            {/* Video */}
            <div className="flex justify-center md:justify-end">
              <VimeoPlayer videoId="867571528" />
            </div>
            {/* Right Column */}
            <div className="space-y-4 ">
              <div className="text-center align-top md:text-left font-display">
                <h1 className="mt-5 h3">
                  Join the Movement: <br /> Let&#8217;s Work Different with AI
                </h1>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl">
                  Become a trailblazer - join the Work Different With AI
                  community! Get exclusive access to hands-on training and
                  experts to shape the ethical AI future. <br /> <br /> Enter
                  your email below to help lead the way in driving responsible,
                  compassionate AI innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

import FeatImage01 from "@/public/images/features-03-image-01.png";
import FeatImage02 from "@/public/images/features-03-image-02.png";
import FeatImage03 from "@/public/images/features-03-image-03.png";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 bg-cocoa_brown-400">
        <div className="py-12 border-t border-cocoa_brown-400 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <div className="inline-flex px-3 py-1 m-2 mb-4 text-sm text-gray-200 rounded-full font-display bg-bourbon-800">
              Work Different With AI Community Resources
            </div>
            <h1 className="mb-4 h2 font-display">
              Enterprise AI Virtual Conference
            </h1>
            <p className="text-xl text-gray-800">
              Join a special interest group to present your work, learn from
              others, discover vetted vendor solutions, and network with peers.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1">
                <Image
                  className="h-auto max-w-full mx-auto md:max-w-none"
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="mb-2 text-xl font-architects-daughter text-bourbon-600">
                    More speed. Less spend
                  </div>
                  <h3 className="mb-3 h3">Keep projects on schedule</h3>
                  <p className="mb-4 text-xl text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul className="-mb-2 text-lg text-gray-400">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 rtl">
                <Image
                  className="h-auto max-w-full mx-auto md:max-w-none"
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="mb-2 text-xl font-architects-daughter text-bourbon-600">
                    More speed. Less spend
                  </div>
                  <h3 className="mb-3 h3">Keep projects on schedule</h3>
                  <p className="mb-4 text-xl text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul className="-mb-2 text-lg text-gray-400">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1">
                <Image
                  className="h-auto max-w-full mx-auto md:max-w-none"
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="mb-2 text-xl font-architects-daughter text-bourbon-600">
                    More speed. Less spend
                  </div>
                  <h3 className="mb-3 h3">Keep projects on schedule</h3>
                  <p className="mb-4 text-xl text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul className="-mb-2 text-lg text-gray-400">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

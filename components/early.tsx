import Image from "next/image";
import IconLeader from "@/public/images/icon-leader.png";
import IconPixie from "@/public/images/icon-pixie.png";
import IconRaceahead from "@/public/images/icon-raceahead.png";
import Link from "next/link";

export default function Early() {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="mx-3 text-4xl md:text-5xl font-display">
          For the Early Adopters
        </h2>
        <hr className="w-1/4 mx-auto my-4 border-t-2" />
      </div>

      {/* Content Cards */}
      <div className="container grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
        {/* Card 1: Be Part of the Vanguard */}
        <div className="p-6 m-2 rounded-lg shadow-md bg-azure_radiance-700">
          <div className="flex justify-center mb-4">
            <Image
              src={IconLeader}
              alt="Be Part of the Vanguard"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-3xl text-outer_space-200 font-display">
            Be Part of the Vanguard
          </h2>
          <p className="text-outer_space-100">
            Join a community of forward-thinkers who recognize the
            transformative power of AI. Be part of the vanguard that sets the
            trend rather than following it.
          </p>
        </div>

        {/* Card 2: First Mover Benefits */}
        <div className="p-6 m-2 rounded-lg shadow-md bg-azure_radiance-700">
          <div className="flex justify-center mb-4">
            <Image
              src={IconRaceahead}
              alt="First Mover Benefits"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-3xl text-outer_space-200 font-display">
            First Mover Benefits
          </h2>
          <p className="text-outer_space-100">
            Being an early adopter comes with its own set of advantages. From
            exclusive access to new features to dedicated support, experience
            the benefits of being a first mover in the AI space.
          </p>
        </div>

        {/* Card 3: Influence the Future */}
        <div className="p-6 m-2 rounded-lg shadow-md bg-azure_radiance-700">
          <div className="flex justify-center mb-4">
            <Image src={IconPixie} alt="First Mover Benefits" height={200} />
          </div>
          <h2 className="mb-4 text-3xl text-outer_space-200 font-display">
            Influence the Future
          </h2>
          <p className="text-outer_space-100">
            Your feedback and insights can directly influence the next wave of
            AI innovations. Contribute to shaping a future where AI is both
            effective and ethical.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <Link
          href="/sign-up"
          className="px-8 py-2 text-2xl text-white rounded-lg bg-apple-500 hover:bg-apple-600"
        >
          Join the Early Adopters Club
        </Link>
      </div>
    </div>
  );
}

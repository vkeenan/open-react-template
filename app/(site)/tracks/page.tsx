import { getAllTracks } from "@/services/track/get-track";
import Image from "next/image";
import Link from "next/link";
import TrackTeacher from "@/public/images/track-teacher.png";
import TechConference from "@/public/images/tech-conference.png";

export default async function Tracks() {
  const tracks = await getAllTracks();
  return (
    <div className="container p-4 mx-auto bg-azure_radiance-100">
      <h1 className="mb-4 text-3xl text-center font-display">
        Work Different With AI Conference Tracks
      </h1>
      <div className="flex flex-col items-center mb-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2">
          <Image
            className="mb-4 md:mb-0"
            src={TechConference}
            alt="Workshop Illustration"
            height={225}
          />
        </div>
        <div className="w-full px-4 md:w-1/2">
          <p className="mb-2 indent-2">
            Launching soon - our interactive Conference Tracks focus on key
            enterprise AI topics. Dive deep through sessions with industry
            experts. Gain insights to work differently with AI.
          </p>
          <p className="mb-2 indent-2">
            Get involved as a speaker, moderator or community member. Share your
            expertise with peers. Influence track direction and expand your
            professional network. Position yourself as an AI thought leader.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mb-8 md:flex-row-reverse">
        <div className="w-full px-4 md:w-1/2">
          <Image
            className="mb-4 md:mb-0"
            src={TrackTeacher}
            alt="AI Landscape Illustration"
            height={225}
          />
        </div>
        <div className="w-full px-4 md:w-1/2">
          <p className="mb-2 indent-2">
            Tracks enable personalized learning. Mix and match areas of interest
            for broad AI fluency or focus for subject matter expertise. Exchange
            ideas and best practices with professionals worldwide.
          </p>
          <p className="mb-2 indent-2">
            Leading organizations require new AI frameworks. Our tracks provide
            trusted guidance for responsible adoption. Join the community
            expanding collective intelligence. Let&rsquo;s shape the future of
            humane and ethical AI.{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="p-4 space-y-4 text-outer_space-100 bg-azure_radiance-600"
          >
            <h2 className="text-xl text-center font-display">{track.Title}</h2>
            <div className="flex flex-col items-center mx-auto">
              <Image
                src={track.Logo}
                width={225}
                height={225}
                alt={track.Name}
                className="mb-2"
              />
              <div>
                <hr className="w-full my-2 border-t-2 border-outer_space-200" />
                <Link
                  href={`/tracks/${track.Slug}`}
                  className="inline-block px-4 py-2 mt-4 text-outer_space-800 hover:text-outer_space-100 bg-azure_radiance-200 hover:bg-azure_radiance-900"
                >
                  Get More Info
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

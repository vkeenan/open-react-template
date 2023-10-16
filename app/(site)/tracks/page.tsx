import { getAllTracks } from "@/services/track/get-track";
import Image from "next/image";
import Link from "next/link";

export default async function Tracks() {
  const tracks = await getAllTracks();
  return (
    <div className="container p-4 mx-auto bg-cocoa_brown-100">
      <h1 className="mb-4 text-3xl text-center font-display">
        Work Different With AI Conference Tracks
      </h1>
      <p className="mb-2 indent-2">paragraph 1</p>
      <p className="mb-2 indent-2">paragraph 2</p>
      <div className="grid grid-cols-1 gap-6">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="p-4 space-y-4 text-gray-100 bg-cocoa_brown-600"
          >
            <div className="flex flex-col items-center mx-auto sm:flex-col md:flex-row md:space-x-4">
              <Image
                src={track.Logo}
                width={200}
                height={200}
                alt={track.Name}
                className="mb-2"
              />
              <div>
                <h2 className="text-xl font-display">{track.Title}</h2>
                <hr className="w-full my-2 border-t-2 border-gray-200" />
                <p className="text-base">{track.Description}</p>
                <Link
                  as="button"
                  href={`/tracks/${track.Slug}`}
                  className="inline-block px-4 py-2 mt-4 text-gray-800 hover:text-gray-100 bg-cocoa_brown-200 hover:bg-cocoa_brown-900"
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

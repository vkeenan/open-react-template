import Image from "next/image";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

import { Date } from "./date";

export function HeroCard({ heroPost }: any) {
  return (
    <article className="flex flex-col mb-4 bg-white shadow-lg">
      <Link
        href={"/posts/" + heroPost.slug}
        className="w-full h-auto max-w-full px-3 py-3 mx-auto shadow-brand-900 drop-shadow-2xl hover:opacity-90"
      >
        <Suspense fallback={<Skeleton height={"100%"} />}>
          <Image
            width={heroPost.featuredImage.mediaDetails.width}
            height={heroPost.featuredImage.mediaDetails.height}
            src={heroPost.featuredImage.sourceUrl}
            sizes="(max-width: 640px) 100vw, 75vw"
            alt="Image description"
            priority={true}
          />
        </Suspense>
      </Link>
      <div className="flex flex-col justify-start p-6">
        <Link
          href={"/posts/category/" + heroPost.categories[0].slug}
          className="font-semibold text-azure_radiance-900 hover:text-azure_radiance-400"
        >
          {heroPost.categories[0].name}
        </Link>
        <Link
          href={"/posts/" + heroPost.slug}
          className="py-4 text-3xl font-display text-azure_radiance-900 hover:text-azure_radiance-400"
        >
          {heroPost.title}
        </Link>
        <div className="pt-3 pb-3 text-sm">
          By{" "}
          <span className="font-semibold hover:text-outer_space-800">
            {heroPost.author.name}
          </span>
          {",  "} <Date dateString={heroPost.date} />
        </div>
        <a href="#" className="pb-6">
          {heroPost.excerpt}
        </a>
        <Link
          href={"/posts/" + heroPost.slug}
          className="text-outer_space-800 uppercase hover:text-black"
        >
          Continue Reading
        </Link>
      </div>
    </article>
  );
}

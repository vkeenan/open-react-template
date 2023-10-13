import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Suspense } from "react";

export function PostCard({
  title,
  date,
  slug,
  featuredImage,
  categories,
}: any) {
  const dateString = format(parseISO(date), "LLLL	d, yyyy");
  return (
    <div className="w-full px-1 my-1 md:w-1/2 lg:my-2 lg:w-1/3 lg:px-2">
      <article className="overflow-hidden bg-white rounded-none shadow-md">
        <Link
          href={"/posts/" + slug}
          className="w-full h-auto max-w-full mx-auto hover:opacity-90"
        >
          <Suspense fallback={<Skeleton height={"100%"} />}>
            <Image
              width={featuredImage.mediaDetails.width}
              height={featuredImage.mediaDetails.height}
              src={featuredImage.sourceUrl}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 30vw, 20vw"
              alt={featuredImage.altText}
            />
          </Suspense>
        </Link>
        <header className="flex items-center justify-between p-2 font-semibold leading-none bg-brand-50 text-cocoa_brown-900 hover:bg-brand-900 hover:text-cocoa_brown-50 md:p-4">
          <Link href={"/posts/category/" + categories[0].slug}>
            {categories[0].name}
          </Link>
        </header>
        <footer className="items-center justify-between p-2 leading-tight md:p-4">
          <h1 className="text-lg">
            <Link
              className="text-black no-underline font-display hover:underline"
              href={"/posts/" + slug}
            >
              {title}
            </Link>
          </h1>
          <p className="text-sm text-grey-darker">{dateString}</p>
        </footer>
      </article>
    </div>
  );
}

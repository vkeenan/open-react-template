import { Suspense } from "react";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export function CoverImage({ coverImage, slug = null }: any) {
  if (coverImage == undefined) {
    return <></>;
  }
  const image = (
    <Suspense>
      <Image
        width={coverImage.mediaDetails.width}
        height={coverImage.mediaDetails.height}
        alt={coverImage.altText}
        src={coverImage?.sourceUrl}
        className={cn(
          "shadow-small",
          {
            "hover:shadow-medium transition-shadow duration-200": slug,
          },
          "object-cover object-center"
        )} // Added Tailwind classes for responsive layout
      />{" "}
    </Suspense>
  );
  return (
    <>
      {slug ? (
        <Link
          href={`/posts/${slug}`}
          aria-label={coverImage.mediaDetails.altText}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </>
  );
}

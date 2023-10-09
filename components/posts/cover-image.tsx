import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export function CoverImage({ coverImage, slug = null }: any) {
  const image = (
    <Suspense fallback={<Skeleton height={'100%'} />}>
      <Image
        width={coverImage.mediaDetails.width}
        height={coverImage.mediaDetails.height}
        alt={coverImage.mediaDetails.altText}
        src={coverImage?.sourceUrl}
        layout='responsive' // added this line
        className={cn('shadow-small', {
          'hover:shadow-medium transition-shadow duration-200': slug,
        })}
      />
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

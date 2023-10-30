import { logger } from "@/lib/logger";
import { Metadata } from "@/types/metadata";
import { getAllTracks, getTrackBySlug } from "@/services/track/get-track";
import Image from "next/image";
import styles from "@/app/css/post-body.module.css";
import sanitizeHtml from "sanitize-html";

export async function generateStaticParams() {
  logger.info("👉generateStaticParams: tracks");
  const tracks = await getAllTracks();
  if (tracks) {
    logger.info("👈generateStaticParams: tracks");
    return tracks.map((item: any) => ({
      slug: item.slug,
    }));
  }
  logger.info("❌generateStaticParams: tracks");
  return [];
}

// export async function generateMetadata({ params }: any) {
//   logger.info("👉generateMetadata: tracks");
//   const { track }: any = await getTrackBySlug(params?.slug);
//   // Use SEO metadata if available, otherwise fall back to the original data
//   const theMetadata: Metadata = {
//     title: track?.metaTitle || track.title,
//     keywords: track.metaKeywords || track.keywords,
//     description: track.metaDescription || track.description,
//     openGraph: {
//       title: track.og?.title || track.title,
//       description: track.og?.description || track.description,
//       type: track.og?.type,
//       url: track.og?.url,
//       images: [
//         {
//           url: track.og?.image?.sourceUrl,
//           alt: track.og?.image?.altText,
//           width: track.og?.image?.mediaDetails?.width,
//           height: track.og?.image?.mediaDetails?.height,
//         },
//       ],
//     },
//     twitter: {
//       title: track.twitter?.title || track.title,
//       description: track.twitter?.description || track.description,
//       // image: {
//       //   url: track.twitter?.image?.sourceUrl,
//       //   alt: track.twitter?.image?.altText,
//       //   width: track.twitter?.image?.mediaDetails?.width,
//       //   height: track.twitter?.image?.mediaDetails?.height,
//       // },
//     },
//   };
//   return theMetadata;
// }

export default async function TrackDetailRenderPage({ params }: any) {
  logger.info(`👉TrackDetailRenderPage:  `);
  const track = await getTrackBySlug(params?.slug);
  if (!track) {
    logger.info(`❌TrackDetailRenderPage: track is null `);
    return {
      notFound: true,
    };
  }
  if (!track.FullDescription) {
    logger.info(`❌TrackDetailRenderPage: full description is null `);
    return {
      notFound: true,
    };
  }
  const clean = sanitizeHtml(track.FullDescription, {
    allowedTags: sanitizeHtml.defaults.allowedTags, // Allow default tags
    allowedAttributes: {}, // Strip all attributes to remove styles
    allowedStyles: {}, // Ensure no styles are carried over
  });
  logger.info(`👈TrackDetailRenderPage: ${track.Name}`);
  return (
    <div className="container p-4 mx-auto bg-azure_radiance-100">
      <h1 className="mb-4 text-4xl text-center font-display">
        Work Different With Conference Tracks
      </h1>
      <h2 className="mb-4 text-xl text-center font-display">{track.Title}</h2>
      <p className="mb-2 text-center font-display">{track.Description}</p>
      <hr className="mb-4 border-0 border-t-2 border-azure_radiance-500" />
      {track.ImageURL && (
        <div className="flex flex-col mb-8">
          <div className="w-full px-4">
            <Image
              className="mb-4 md:mb-0"
              src={track.ImageURL}
              alt="Conference Track Illustration"
            />
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-6">
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: clean }}
        />
      </div>
    </div>
  );
}

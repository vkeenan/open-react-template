import { logger } from "@/lib/logger";
import { Metadata } from "@/types/metadata";
import cn from "classnames";
import { getAllTracks, getTrackBySlug } from "@/services/track/get-track";
import Image from "next/image";
import styles from "@/app/css/post-body.module.css";
import sanitizeHtml from "sanitize-html";
export const dynamic = "force-static";

export async function generateStaticParams() {
  logger.info("👉 generateStaticParams: tracks");
  const tracks = await getAllTracks();
  if (tracks) {
    logger.info("👈generateStaticParams: tracks");
    return tracks.map((item: any) => ({
      slug: item.slug,
    }));
  }
  logger.info("❌ generateStaticParams: tracks");
  return [];
}

export default async function TrackDetailRenderPage({ params }: any) {
  logger.info(`👉TrackDetailRenderPage:  `);
  const track = await getTrackBySlug(params?.slug);
  if (!track) {
    logger.info(`❌TrackDetailRenderPage:  track is null`);
    return {
      notFound: true,
    };
  }
  if (!track.FullDescription) {
    logger.info("❌WorkshopDetailRenderPage: full description is null");
    return null;
  }
  const clean = sanitizeHtml(track.FullDescription, {
    allowedTags: sanitizeHtml.defaults.allowedTags, // Allow default tags
    allowedAttributes: {}, // Strip all attributes to remove styles
    allowedStyles: {}, // Ensure no styles are carried over
  });
  logger.info(`👈TrackDetailRenderPage: ${track.Name} `);
  return (
    <div className="container p-4 mx-auto mb-4 bg-azure_radiance-50">
      <h1 className="mb-4 text-4xl text-center font-display">
        Work Different With AI Conference Track
      </h1>
      <h2 className="mb-4 text-3xl text-center font-display">{track.Title}</h2>
      <p className="mb-2 text-center font-display">{track.Description}</p>
      <hr className="mb-4 border-0 border-t-2 border-azure_radiance-500" />
      {track.ImageURL && (
        <div className="flex flex-col mb-8">
          <div className="w-full px-4 mb-4 md:mb-0">
            <Image
              src={track.ImageURL}
              alt={track.ImageAltText}
              width={850}
              height={486}
              className={cn(
                "shadow-small",
                {
                  "hover:shadow-medium transition-shadow duration-200":
                    track.Slug,
                },
                "object-cover object-center"
              )} // Added Tailwind classes for responsive layout
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

import { logger } from "@/lib/logger";
import cn from "classnames";
// import { Metadata } from "@/types/metadata";
import { getAllServices, getServiceBySlug } from "@/services/map/get-services";
import Image from "next/image";
import styles from "@/app/css/post-body.module.css";
import sanitizeHtml from "sanitize-html";
export const dynamic = "force-static";

export async function generateStaticParams() {
  logger.info("👉generateStaticParams: services");
  const services = await getAllServices();
  if (services) {
    logger.info("👈generateStaticParams: services");
    return services.services.map((item: any) => ({
      slug: item.slug,
    }));
  }
  logger.info("❌generateStaticParams: services");
  return [];
}
// export async function generateMetadata({ params }: any) {
//   logger.info("👉generateMetadata: services");
//   const { service }: any = await getServiceBySlug(params?.slug);
//   // Use SEO metadata if available, otherwise fall back to the original data
//   const theMetadata: Metadata = {
//     title: service?.metaTitle || service.title,
//     keywords: service.metaKeywords || service.keywords,
//     description: service.metaDescription || service.description,
//     openGraph: {
//       title: service.og?.title || service.title,
//       description: service.og?.description || service.description,
//       type: service.og?.type,
//       url: service.og?.url,
//       images: [
//         {
//           url: service.og?.image?.sourceUrl,
//           alt: service.og?.image?.altText,
//           width: service.og?.image?.mediaDetails?.width,
//           height: service.og?.image?.mediaDetails?.height,
//         },
//       ],
//     },
//     twitter: {
//       title: service.twitter?.title || service.title,
//       description: service.twitter?.description || service.description,
//       // image: {
//       //   url: service.twitter?.image?.sourceUrl,
//       //   alt: service.twitter?.image?.altText,
//       //   width: service.twitter?.image?.mediaDetails?.width,
//       //   height: service.twitter?.image?.mediaDetails?.height,
//       // },
//     },
//   };
//   return theMetadata;
// }

export default async function WorkshopDetailRenderPage({ params }: any) {
  logger.info(`👉WorkshopDetailRenderPage:  `);
  const service = await getServiceBySlug(params?.slug);
  if (!service) {
    logger.info("❌WorkshopDetailRenderPage: service is null");
    return null;
  }
  if (!service.FullDescription) {
    logger.info("❌WorkshopDetailRenderPage: full description is null");
    return null;
  }
  const clean = sanitizeHtml(service.FullDescription, {
    allowedTags: sanitizeHtml.defaults.allowedTags, // Allow default tags
    allowedAttributes: {}, // Strip all attributes to remove styles
    allowedStyles: {}, // Ensure no styles are carried over
  });
  logger.info(`👈WorkshopDetailRenderPage: ${service.Name} `);
  return (
    <div className="container p-4 mx-auto bg-azure_radiance-50">
      <h1 className="mb-4 text-4xl text-center font-display">
        Work Different With AI Consulting Service Providers
      </h1>
      <h2 className="mb-4 text-3xl text-center font-display">{service.Name}</h2>
      <p className="mb-2 text-center font-display">{service.Description}</p>
      <hr className="mb-4 border-0 border-t-2 border-azure_radiance-500" />
      {service.ImageURL && service.ImageAltText && (
        <div className="flex flex-col mb-8">
          <div className="w-full px-4 mb-4 md:mb-0">
            <Image
              src={service.ImageURL}
              alt={service.ImageAltText}
              width={850}
              height={486}
              className={cn(
                "shadow-small",
                {
                  "hover:shadow-medium transition-shadow duration-200":
                    service.Slug,
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

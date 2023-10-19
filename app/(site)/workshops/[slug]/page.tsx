import { logger } from "@/lib/logger";
import cn from "classnames";
import { Metadata } from "@/types/metadata";
import { getAllCourses, getCourseBySlug } from "@/services/course/get-course";
import Image from "next/image";
import styles from "@/app/css/post-body.module.css";
import sanitizeHtml from "sanitize-html";
export const dynamic = "force-static";

export async function generateStaticParams() {
  logger.info("👉generateStaticParams: workshops");
  const courses = await getAllCourses();
  if (courses) {
    logger.info("👈generateStaticParams: workshops");
    return courses.map((item: any) => ({
      slug: item.slug,
    }));
  }
  logger.info("❌generateStaticParams: workshops");
  return [];
}

// export async function generateMetadata({ params }: any) {
//   logger.info("👉generateMetadata: workshops");
//   const { course }: any = await getCourseBySlug(params?.slug);
//   // Use SEO metadata if available, otherwise fall back to the original data
//   const theMetadata: Metadata = {
//     title: course?.metaTitle || course.title,
//     keywords: course.metaKeywords || course.keywords,
//     description: course.metaDescription || course.description,
//     openGraph: {
//       title: course.og?.title || course.title,
//       description: course.og?.description || course.description,
//       type: course.og?.type,
//       url: course.og?.url,
//       images: [
//         {
//           url: course.og?.image?.sourceUrl,
//           alt: course.og?.image?.altText,
//           width: course.og?.image?.mediaDetails?.width,
//           height: course.og?.image?.mediaDetails?.height,
//         },
//       ],
//     },
//     twitter: {
//       title: course.twitter?.title || course.title,
//       description: course.twitter?.description || course.description,
//       // image: {
//       //   url: course.twitter?.image?.sourceUrl,
//       //   alt: course.twitter?.image?.altText,
//       //   width: course.twitter?.image?.mediaDetails?.width,
//       //   height: course.twitter?.image?.mediaDetails?.height,
//       // },
//     },
//   };
//   return theMetadata;
// }

export default async function WorkshopDetailRenderPage({ params }: any) {
  logger.info(`👉WorkshopDetailRenderPage:  `);
  const course = await getCourseBySlug(params?.slug);
  if (!course) {
    logger.info("❌WorkshopDetailRenderPage: course is null");
    return null;
  }
  if (!course.FullDescription) {
    logger.info("❌WorkshopDetailRenderPage: full description is null");
    return null;
  }
  const clean = sanitizeHtml(course.FullDescription, {
    allowedTags: sanitizeHtml.defaults.allowedTags, // Allow default tags
    allowedAttributes: {}, // Strip all attributes to remove styles
    allowedStyles: {}, // Ensure no styles are carried over
  });
  logger.info(`👈WorkshopDetailRenderPage: ${course.Name} `);
  return (
    <div className="container p-4 mx-auto bg-cocoa_brown-50">
      <h1 className="mb-4 text-4xl text-center font-display">
        Work Different With AI Workshops
      </h1>
      <h2 className="mb-4 text-3xl text-center font-display">{course.Title}</h2>
      <p className="mb-2 text-center font-display">{course.Description}</p>
      <hr className="mb-4 border-0 border-t-2 border-cocoa_brown-500" />
      {course.ImageURL && course.ImageAltText && (
        <div className="flex flex-col mb-8">
          <div className="w-full px-4 mb-4 md:mb-0">
            <Image
              src={course.ImageURL}
              alt={course.ImageAltText}
              width={850}
              height={486}
              className={cn(
                "shadow-small",
                {
                  "hover:shadow-medium transition-shadow duration-200":
                    course.Slug,
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

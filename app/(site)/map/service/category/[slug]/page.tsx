import "server-only";
import { ServiceCompanyTable } from "@/components/map/service-company-table";
import { getServiceCategoryBySlug } from "@/services/map/get-service-category-by-slug";
import { getAllServiceCategorySlugs } from "@/services/map/get-categories";
import { logger } from "@/lib/logger";
import Image from "next/image";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const { slugs: data } = await getAllServiceCategorySlugs();
  if (data) {
    return data.map((item: any) => ({
      slug: item.Slug,
    }));
  } else {
    return [];
  }
}

export default async function ServiceCategoryItemPage({ params }: any) {
  logger.debug("👉ServiceCategoryItemPage: ", params?.slug);
  const category = await getServiceCategoryBySlug(params?.slug);
  if (!category) {
    logger.error(
      `💣ServiceCategoryItemPage: category not found ${params?.slug}`
    );
    return {
      props: {},
      notFound: true,
    };
  }
  logger.debug(`👈ServiceCategoryItemPage: category= ${category.Name}`);
  return (
    <>
      <div className="w-11/12 p-4 mx-auto mb-4 bg-white shadow-brand-900 drop-shadow-2xl">
        <div className="flex flex-col md:flex-row items-fill">
          <div className="items-start flex-1 px-2">
            <div
              style={{
                width: "100%",
                height: "75px",
                padding: "2px",
                position: "relative",
              }}
            >
              {category.Logo && (
                <Image
                  fill
                  alt={category.Name}
                  src={category.Logo}
                  sizes="100vw, 100vh"
                  className="object-scale-down"
                />
              )}
            </div>
          </div>
          <div className="flex-1 px-2 py-4 text-center">
            <p className="mt-2 mb-4 text-4xl xl:text-6xl font-display">
              {category.Name}
            </p>
            <div className="flex justify-center gap-4 pt-1 mr-2 text-xl align-middle text-brand-700"></div>
          </div>
          <div className="items-end flex-1 px-2">
            <div
              style={{
                width: "100%",
                height: "75px",
                padding: "2px",
                position: "relative",
              }}
            >
              {category.ImageURL && (
                <Image
                  fill
                  alt={category.ImageAltText || "Image of " + category.Name}
                  src={category.ImageURL}
                  sizes="100vw, 100vh"
                  className="object-scale-down"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex-col mt-8 md:flex-row items-fill">
          {category.Tagline && (
            <div className="flex-1 py-2">
              <h3 className="text-lg font-bold text-gray-700">
                Company Tagline
              </h3>
              <p className="text-base">{category.Tagline}</p>
            </div>
          )}
          {category.Description && (
            <div className="flex-1 py-2">
              <h3 className="text-lg font-bold text-gray-700">
                Company Description
              </h3>
              <p className="text-base">{category.Description}</p>
            </div>
          )}
        </div>
        {category.Services.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold">Services</h3>
            <div className="mt-4">
              <ServiceCompanyTable services={category.Services} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

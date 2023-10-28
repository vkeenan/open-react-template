import "server-only";
import { FaGlobe } from "react-icons/fa";
import {
  getProductBySlug,
  getAllProductSlugs,
} from "@/services/map/get-products";
import { logger } from "@/lib/logger";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const { slugs: data } = await getAllProductSlugs();
  if (data) {
    return data.map((item: any) => ({
      slug: item.Slug__c,
    }));
  } else {
    return [];
  }
}

export default async function ProductMapDetailPage({ params }: any) {
  logger.debug(`👉ProductMapDetailPage: ${params?.slug}`);
  const product = await getProductBySlug(params?.slug);
  if (!product) {
    return {
      props: {},
      notFound: true,
    };
  }
  logger.debug(`👈ProductMapDetailPage: product= ${product.Name}`);

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
              {product.Logo && (
                <Image
                  fill
                  alt={product.Name}
                  src={product.Logo}
                  sizes="100vw, 100vh"
                  className="object-scale-down"
                />
              )}
            </div>
          </div>
          <div className="flex-1 px-2 py-4 text-center">
            <p className="mt-2 mb-4 text-4xl xl:text-6xl font-display">
              {product.Name}
            </p>
            <p className="mt-2 mb-4 text-2xl xl:text-4xl">
              <Link href={`/map/company/${product.AccountSlug}`}>
                {product.AccountName}
              </Link>
            </p>
            <div className="flex justify-center gap-4 pt-1 mr-2 text-xl align-middle text-brand-700">
              {product.URL && (
                <div>
                  <a
                    className="transition hover:opacity-75"
                    href={product.URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10">
                      <FaGlobe />
                    </span>
                  </a>
                </div>
              )}
            </div>
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
              {product.ImageURL && (
                <Image
                  fill
                  alt={product.ImageAltText}
                  src={product.ImageURL}
                  sizes="100vw, 100vh"
                  className="object-scale-down"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex-col mt-8 md:flex-row items-fill">
          {product.SalesforceSpecific && (
            <div className="flex-1 py-2">
              <h3 className="text-lg font-bold text-gray-700">
                {"Salesforce Specific"}
              </h3>
            </div>
          )}
          {product.Tagline && (
            <div className="flex-1 py-2">
              <h3 className="text-lg font-bold text-gray-700">
                Product Tagline
              </h3>
              <p className="text-base">{product.Tagline}</p>
            </div>
          )}
          {product.Description && (
            <div className="flex-1 py-2">
              <h3 className="text-lg font-bold text-gray-700">
                Full Description
              </h3>
              <p className="text-base">{product.FullDescription}</p>
            </div>
          )}
        </div>
        {product.Categories.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold">Categories</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {product.Categories.map((category: any) => (
                <li
                  key={category.Id}
                  className="px-2 py-1 text-sm text-white bg-brand-700"
                >
                  <Link href={`/map/product/category/${category.Slug}`}>
                    {category.Name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

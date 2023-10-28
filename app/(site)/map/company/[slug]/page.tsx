import "server-only";
import { FaLinkedin, FaGlobe, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CompanyProductTable } from "@/components/map/company-product-table";
import { logger } from "@/lib/logger";
import {
  getCompanyBySlug,
  getAllCompanySlugs,
} from "@/services/map/get-company";
import Image from "next/image";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const { slugs: data } = await getAllCompanySlugs();
  if (data) {
    return data.map((item: any) => ({
      slug: item,
    }));
  } else {
    return [];
  }
}

export default async function CompanyMapDetailPage({ params }: any) {
  logger.debug("👉CompanyMapDetailPage: ", params.slug);
  const company = await getCompanyBySlug(params.slug);
  if (!company) {
    logger.error("💣CompanyMapDetailPage: company not found", params?.slug);
    return {
      props: {},
      notFound: true,
    };
  }
  logger.debug("👈CompanyMapDetailPage: company=", company.Name);
  return (
    <>
      <div className="w-full p-4 mx-auto mb-4 bg-white shadow-brand-900 drop-shadow-2xl">
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
              {company.Logo && (
                <Image
                  fill
                  alt={company.Name}
                  src={company.Logo}
                  sizes="100vw, 100vh"
                  className="object-scale-down"
                />
              )}
            </div>
          </div>
          <div className="flex-1 px-2 py-4 text-center">
            <p className="mt-2 mb-4 text-4xl xl:text-6xl font-display">
              {company.Name}
            </p>
            <div className="flex justify-center gap-4 pt-1 mr-2 text-xl align-middle text-brand-700">
              {company.Website && (
                <div>
                  <a
                    className="transition hover:opacity-75"
                    href={company.Website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10">
                      <FaGlobe />
                    </span>
                  </a>
                </div>
              )}
              {company.LinkedIn && (
                <div>
                  <a
                    className="transition hover:opacity-75"
                    href={company.LinkedIn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10">
                      <FaLinkedin />
                    </span>
                  </a>
                </div>
              )}
              {company.Twitter && (
                <div>
                  <a
                    className="transition hover:opacity-75"
                    href={company.Twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10">
                      <FaTwitter />
                    </span>
                  </a>
                </div>
              )}
              {company.Email && company.Email.match(/@/) && (
                <div>
                  <a
                    className="transition hover:opacity-75"
                    href={"mailto:" + company.Email}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10">
                      <MdOutlineEmail />
                    </span>
                  </a>
                </div>
              )}
              {company.Facebook && (
                <div>
                  <a
                    className="transition hover:opacity-75"
                    href={company.Facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10">
                      <FaFacebook />
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
              {company.ImageURL && (
                <Image
                  fill
                  alt={company.ImageAltText}
                  src={company.ImageURL}
                  sizes="100vw, 100vh"
                  className="object-scale-down"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex-col mt-8 md:flex-row items-fill">
          {company.Location && (
            <div className="flex-1 py-2">
              <h3 className="text-lg font-bold text-gray-700">
                Headquarters Location
              </h3>
              <p className="text-base">{company.Location}</p>
            </div>
          )}
          {company.TagLine && (
            <div className="flex-1 py-2">
              <h3 className="text-lg font-bold text-gray-700">
                Company Tagline
              </h3>
              <p className="text-base">{company.TagLine}</p>
            </div>
          )}
          {company.Description && (
            <div className="flex-1 py-2">
              <h3 className="text-lg font-bold text-gray-700">
                Company Description
              </h3>
              <p className="text-base">{company.Description}</p>
            </div>
          )}
        </div>
        {company.Products.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold">Products</h3>
            <div className="mt-4">
              <CompanyProductTable products={company.Products} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

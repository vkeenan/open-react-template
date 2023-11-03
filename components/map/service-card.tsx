import Image from "next/image";
import Link from "next/link";
import { ServiceClass } from "@/types/service";

export function ServiceCard(service: ServiceClass) {
  return (
    <div className="w-full px-1 my-1 md:w-1/2 lg:my-2 lg:w-1/3 lg:px-2">
      <article className="max-w-sm px-6 py-4 overflow-hidden bg-white rounded-none shadow-md">
        {service.ImageURL && (
          <>
            <div
              style={{
                width: "100%",
                height: "125px",
                position: "relative",
              }}
            >
              <Link href={`/map/service/${service.Slug}`}>
                <Image
                  fill
                  alt={service.ImageAltText || service.Name}
                  src={service.ImageURL}
                  sizes="100vw, 100vh"
                  className="object-scale-down"
                />{" "}
              </Link>
            </div>
            <hr className="mt-4 mb-3 border-3 border-brand-300" />
          </>
        )}
        <header className="flex flex-row">
          <div className="font-display">
            <div>
              <Link href={`/map/company/${service.AccountSlug}`}>
                {service.AccountName}
              </Link>
            </div>
            <div>
              <Link href={`/map/service/${service.Slug}`}>{service.Name}</Link>
            </div>
          </div>
          <hr className="mt-4 mb-3 border-3 border-brand-300" />
        </header>
        <p className="text-sm text-outer_space-700">{service.Tagline}</p>
        <hr className="mt-4 mb-3 border-3 border-brand-300" />
        <footer className="items-center justify-between p-2 leading-tight md:p-4">
          {service.FullDescription && (
            <div
              dangerouslySetInnerHTML={{ __html: service.FullDescription }}
            />
          )}
        </footer>
      </article>
    </div>
  );
}

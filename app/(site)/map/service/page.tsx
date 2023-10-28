import { Pagination } from "@/components/posts/pagination";
import { ServiceCard } from "@/components/map/service-card";
import { getPaginatedServices } from "@/services";

export const dynamic = "force-static";

export default async function ServiceMapMainPage({ params }: any) {
  const { services: data, pagination } = await getPaginatedServices();
  const services = data.slice(0, data.length);
  return (
    <>
      <h2 className="mt-6 text-3xl font-display xl:text-6xl">
        Services Tracked
      </h2>
      <div className="container px-4 mx-auto my-6 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {services.map((item: any, index: number) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>
      </div>
      {pagination && (
        <Pagination
          addCanonical={false}
          currentPage={pagination?.currentPage}
          pagesCount={pagination?.pagesCount}
          basePath="/map/service"
        />
      )}
    </>
  );
}

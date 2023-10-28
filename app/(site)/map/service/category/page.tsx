import "server-only";
import { Pagination } from "@/components/posts/pagination";
import { ServiceCategoryCard } from "@/components/map/service-category-card";

import { getPaginatedServiceCategories } from "@/services";

export const dynamic = "force-static";

export default async function CompanyCategoryMainPage() {
  const { categories: data, pagination } =
    await getPaginatedServiceCategories();
  const categories = data.slice(0, data.length);
  return (
    <>
      <h2 className="mt-6 text-3xl font-display xl:text-6xl">
        IT Service Categories
      </h2>
      <div className="container px-4 mx-auto my-6 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {categories.map((item: any, index: number) => (
            <ServiceCategoryCard key={index} {...item} />
          ))}
        </div>
      </div>
      {pagination && (
        <Pagination
          addCanonical={false}
          currentPage={pagination?.currentPage}
          pagesCount={pagination?.pagesCount}
          basePath="/map/service/category"
        />
      )}
    </>
  );
}

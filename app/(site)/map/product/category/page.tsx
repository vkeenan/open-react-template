import "server-only";
import { Pagination } from "@/components/posts/pagination";
import { ProductCategoryCard } from "@/components/map/product-category-card";

import { getPaginatedProductCategories } from "@/services";

export const dynamic = "force-static";

export default async function CompanyCategoryMainPage() {
  const { categories: data, pagination } =
    await getPaginatedProductCategories();
  const categories = data.slice(0, data.length);
  return (
    <>
      <h2 className="mt-6 text-3xl font-display xl:text-6xl">
        Software Product Categories
      </h2>
      <div className="container px-4 mx-auto my-6 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {categories.map((item: any, index: number) => (
            <ProductCategoryCard key={index} {...item} />
          ))}
        </div>
      </div>
      {pagination && (
        <Pagination
          addCanonical={false}
          currentPage={pagination?.currentPage}
          pagesCount={pagination?.pagesCount}
          basePath="/map/product/category"
        />
      )}
    </>
  );
}

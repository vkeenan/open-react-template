import "server-only";
import { ProductCategoryCard } from "@/components/map/product-category-card";
import { Pagination } from "@/components/posts/pagination";

import { getPaginatedProductCategories } from "@/services";

export async function generateStaticParams() {
  const params = [];
  const { pagination }: any = await getPaginatedProductCategories();
  for (let i = 1; i <= pagination.pagesCount; i++) {
    params.push({
      pageNum: i.toString(),
    });
  }
  return params;
}

export const dynamic = "force-static";

export default async function MapIndustryAdditionalPage({ params }: any) {
  const { categories: data, pagination } = await getPaginatedProductCategories({
    currentPage: params.pageNum,
  });
  const categories = data.slice(0, data.length);
  return (
    <>
      <h2 className="mt-6 text-3xl font-display xl:text-6xl">
        Additional Software Product Categories, Page {params.page}
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

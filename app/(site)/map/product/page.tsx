import { Pagination } from "@/components/posts/pagination";
import { ProductCard } from "@/components/map/product-card";

import { getPaginatedProducts } from "@/services";

export const dynamic = "force-static";

export default async function ProductMapMainPage({ params }: any) {
  const { products: data, pagination } = await getPaginatedProducts();
  const products = data.slice(0, data.length);
  return (
    <>
      <h2 className="mt-6 text-3xl font-display xl:text-6xl">
        Products Tracked
      </h2>
      <div className="container px-4 mx-auto my-6 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {products.map((item: any, index: number) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </div>
      {pagination && (
        <Pagination
          addCanonical={false}
          currentPage={pagination?.currentPage}
          pagesCount={pagination?.pagesCount}
          basePath="/map/product"
        />
      )}
    </>
  );
}

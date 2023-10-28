import { ProductCard, Pagination } from '@/components';

import { getPaginatedProducts } from '@/services';

export async function generateStaticParams() {
  const params = [];
  const { pagination }: any = await getPaginatedProducts();
  for (let i = 1; i <= pagination.pagesCount; i++) {
    params.push({
      pageNum: i.toString(),
    });
  }
  return params;
}

export const dynamic = 'force-static';

export default async function ProductMapAdditionalPage({ params }: any) {
  const { products: data, pagination } = await getPaginatedProducts({
    currentPage: params.pageNum,
  });
  const products = data.slice(0, data.length);
  return (
    <>
      <h2 className='mt-6 text-3xl font-display xl:text-6xl'>
        Products Tracked Page {params.page}
      </h2>
      <div className='container px-4 mx-auto my-6 md:px-12'>
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
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
          basePath='/map/product'
        />
      )}
    </>
  );
}

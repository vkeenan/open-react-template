import { CompanyCard } from "@/components/map/company-card";
import { Pagination } from "@/components/posts/pagination";
import "server-only";
import { getPaginatedCompanies } from "@/services";
export const dynamic = "force-static";

export async function generateStaticParams() {
  const params = [];
  const { pagination }: any = await getPaginatedCompanies();
  for (let i = 1; i <= pagination.pagesCount; i++) {
    params.push({
      pageNum: i.toString(),
    });
  }
  return params;
}

export default async function CompanyMapAdditionalPage({ params }: any) {
  const { companies: accounts, pagination } = await getPaginatedCompanies({
    currentPage: params.pageNum,
  });
  const companies = accounts.slice(0, accounts.length);
  return (
    <>
      <h2 className="mt-6 text-3xl font-display xl:text-6xl">
        Companies Tracked Page {params.page}
      </h2>
      <div className="container px-4 mx-auto my-6 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {companies.map((item: any, index: number) => (
            <CompanyCard key={index} {...item} />
          ))}
        </div>
      </div>
      {pagination && (
        <Pagination
          addCanonical={false}
          currentPage={pagination?.currentPage}
          pagesCount={pagination?.pagesCount}
          basePath="/map/company"
        />
      )}
    </>
  );
}

import { Pagination } from "@/components/posts/pagination";
import { CompanyCard } from "@/components/map/company-card";
import { CompanyClass } from "@/types/company";

export function CompanyArrayComponent(
  companies: CompanyClass[],
  pagination: any
) {
  return (
    <div className="container px-4 mx-auto my-6 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {companies.map((item: any, index: number) => (
          <>
            <CompanyCard key={index} {...item} />
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath="/map/company"
            />
          </>
        ))}
      </div>
    </div>
  );
}

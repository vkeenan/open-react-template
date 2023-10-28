import "server-only";
import { CompanyListComponent } from "@/components/map/company-list-component";
import { logger } from "@/lib/logger";
import { getAllCompanies } from "@/services/map/get-company";
import { Suspense } from "react";

export const dynamic = "force-static";

export default async function CompanyMapMainPage() {
  logger.debug("👉CompanyMapMainPage()");
  const data = await getAllCompanies();
  let companies: any[] = [];
  data.forEach((element) => {
    companies.push(JSON.stringify(element));
  });
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CompanyListComponent companies={companies} />{" "}
      </Suspense>
    </>
  );
}

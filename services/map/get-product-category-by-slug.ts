import 'server-only';
import { createFetchConfig, FetchConfig } from '@/lib/fetch-config';
import { CategoryClass, CategoryResponse } from '@/types/category';
import { logger } from '@/lib/logger';

export async function getProductCategoryBySlug(slug: string): Promise<CategoryClass | null> {
  logger.debug(`👉getProductCategoryBySlug: ${slug}`)
  const config: FetchConfig = {
    endpoint: 'http://research.work.tnxs.net:8080/v1/industries',
    queryParams: {
      slug: slug,
      productCategory: "true",
    },
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`Error fetching companies: ${response.statusText}`);
    }
    const restResponse: CategoryResponse = await response.json();
    logger.debug(`👈getProductCategoryBySlug: n = ${restResponse.Data.length}`);
    return new CategoryClass(restResponse.Data[0]);
  } catch (error) {
    logger.error(`⛔👈getProductCategoryBySlug: Error fetching product category: ${error}`);
  }
  return null;
}

export function getProductCategoriesPerPage() {
  if (process.env.INDUSTRIES_PER_PAGE) {
    return Number(process.env.INDUSTRIES_PER_PAGE);
  } else {
    return 21;
  }
}
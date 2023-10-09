import 'server-only';
import { createFetchConfig, FetchConfig } from '@/lib/api';
import { CategoryClass, CategoryResponse } from '@/types';
import { logger } from '@/lib/logger';

export async function getServiceCategoryBySlug(slug: string): Promise<CategoryClass | null> {
  logger.debug(`👉getServiceCategoryBySlug: ${slug}`)
  const config: FetchConfig = {
    endpoint: 'http://research.work.tnxs.net:8080/v1/industries',
    queryParams: {
      slug: slug,
      serviceCategory: "true",
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
    logger.debug(`👈getServiceCategoryBySlug: n = ${restResponse.Data.length}`);
    return new CategoryClass(restResponse.Data[0]);
  } catch (error) {
    logger.error(`⛔👈getServiceCategoryBySlug: Error fetching service category: ${error}`);
  }
  return null;
}

export function getServiceCategoriesPerPage() {
  if (process.env.INDUSTRIES_PER_PAGE) {
    return Number(process.env.INDUSTRIES_PER_PAGE);
  } else {
    return 21;
  }
}
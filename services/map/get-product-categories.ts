import 'server-only';
import { createFetchConfig, FetchConfig } from '@/lib/fetch-config';
import { CategoryResponse } from '@/types/category';
import { logger } from '@/lib/logger';

export async function getProductCategories() {
  logger.debug(`👉getProductCategories`);
  const config: FetchConfig = {
    endpoint: 'http://research.vernonkeenan.com:8080/v1/industries',
    queryParams: {
      productCategory: "true",
    },
  };

  const { headers, url } = createFetchConfig(config, 'GET');

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: headers,
  });

  if (!response.ok) {
    throw new Error(`Error fetching companies: ${response.statusText}`);
  }

  const restResponse: CategoryResponse = await response.json();
  logger.debug('👈getAllCompanies: done', { data: restResponse.Data.length });
  return restResponse.Data;
}
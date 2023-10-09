import 'server-only';
import { CategoryClass, CategoryResponse } from '@/types/category';
import { logger } from '@/lib/logger';
import { createFetchConfig, FetchConfig } from '@/lib/fetch-config';

export async function getAllProductCategories(): Promise<{ categories: CategoryClass[] }> {
  logger.debug('👉getAllProductCategories')
  const config: FetchConfig = {
    endpoint: 'http://research.work.tnxs.net:8080/v1/industries',
    queryParams: {
      productCategory: 'true',
    },
  };

  const { headers, url } = createFetchConfig(config, 'GET');

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: headers,
  });

  if (!response.ok) {
    throw new Error(`Error fetching categories: ${response.statusText}`);
  }

  const restResponse: CategoryResponse = await response.json();
  const _categories = restResponse.Data.map((category) => new CategoryClass(category));
  logger.debug(`👈getAllProductCategories: n = ${_categories.length}`);
  return { categories: _categories };

}

export async function getAllProductCategorySlugs(): Promise<{ slugs: string[] }> {
  let _map_category_slugs: any = null;
  const { categories: data } = await getAllProductCategories();
  if (data) {
    _map_category_slugs = data.map((category) => category.Slug);
  }
  return { slugs: _map_category_slugs };
}

export async function getAllServiceCategories(): Promise<{ categories: CategoryClass[] }> {
  logger.debug('👉getAllServiceCategories')
  const config: FetchConfig = {
    endpoint: 'http://research.work.tnxs.net:8080/v1/industries',
    queryParams: {
      serviceCategory: 'true',
    },
  };

  const { headers, url } = createFetchConfig(config, 'GET');

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: headers,
  });

  if (!response.ok) {
    throw new Error(`Error fetching categories: ${response.statusText}`);
  }

  const restResponse: CategoryResponse = await response.json();
  const _categories = restResponse.Data.map((category) => new CategoryClass(category));
  logger.debug(`👈getAllServiceCategories: n = ${_categories.length}`);
  return { categories: _categories };

}

export async function getAllServiceCategorySlugs(): Promise<{ slugs: string[] }> {
  let _service_category_slugs: any = null;
  const { categories: data } = await getAllServiceCategories();
  if (data) {
    _service_category_slugs = data.map((category) => category.Slug);
  }
  return { slugs: _service_category_slugs };
}
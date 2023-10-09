import 'server-only';
import { ProductClass, ProductResponse } from '@/types/product';
import { createFetchConfig, FetchConfig } from '@/lib/fetch-config'
import { logger } from '@/lib/logger';

export async function getAllProducts(): Promise<{ products: ProductClass[] }> {
  logger.debug('👉getAllProducts');
  const config: FetchConfig = {
    endpoint: 'http://research.work.tnxs.net:8080/v1/companyproducts',
    queryParams: {
      limit: '200',
    },
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`⛔getAllProducts: Error fetching products: ${response.statusText}`);
    }
    const restResponse: ProductResponse = await response.json();
    const _products = restResponse.Data.map((product) => {
      return new ProductClass(product);
    });
    logger.debug(`👈getAllProducts: ${_products.length}`);
    return { products: _products };
  } catch (error) {
    logger.error(`⛔getAllProducts: Error fetching products: ${error}`);
  }
  return { products: [] };
}

export async function getAllProductSlugs(): Promise<{ slugs: string[] }> {
  logger.debug('👉getAllProductSlugs');
  const config: FetchConfig = {
    endpoint: 'http://research.work.tnxs.net:8080/v1/companyproducts',
    queryParams: {
      limit: '200',
    },
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`⛔getAllProductSlugs: Error fetching products: ${response.statusText}`);
    }
    const restResponse: ProductResponse = await response.json();
    const _slugs = restResponse.Data.map((product) => {
      return product.Slug;
    });
    logger.debug(`👈getAllProductSlugs: ${_slugs.length}`);
    return { slugs: _slugs };
  } catch (error) {
    logger.error(`⛔getAllProductSlugs: Error fetching product slugs: ${error}`);
  }
  return { slugs: [] };
}

export async function getProductBySlug(slug: string): Promise<ProductClass | null> {
  logger.debug(`👉getProductBySlug: ${slug}`)
  const config: FetchConfig = {
    endpoint: 'http://research.work.tnxs.net:8080/v1/companyproducts',
    queryParams: {
      slug: slug,
    },
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`⛔getProductBySlug: Error fetching products: ${response.statusText}`);
    }
    const restResponse: ProductResponse = await response.json();
    logger.debug('👈getAllCompanies: done', { data: restResponse.Data.length });
    return new ProductClass(restResponse.Data[0]);
  } catch (error) {
    logger.error(`⛔getProductBySlug: Error fetching products: ${error}`);
  }
  return null;
}

export function getProductsPerPage() {
  if (process.env.PRODUCTS_PER_PAGE) {
    return Number(process.env.PRODUCTS_PER_PAGE);
  } else {
    return 18;
  }
}
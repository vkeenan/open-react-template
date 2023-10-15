import 'server-only';
import { CompanyClass, CompanyResponse } from '@/types/company';
import { CompanyCategoryClass, CompanyCategoryResponse } from '@/types/company-category';
import { logger } from '@/lib/logger';
import { createFetchConfig, FetchConfig } from '@/lib/fetch-config';

async function fetchCompany(queryParams: Record<string, string>): Promise<CompanyClass | null> {
  logger.debug(`👉fetchCompany: queryParams: ${queryParams}`);
  try {
    const config: FetchConfig = {
      endpoint: 'http://plex.work.tnxs.net:8080/v1/companies',
      queryParams,
    };
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`Error fetching companies: ${response.statusText}`);
    }
    const restResponse: CompanyResponse = await response.json();
    logger.debug(`👈fetchCompany: n=${restResponse.Data.length}`);
    return new CompanyClass(restResponse.Data[0]);
  } catch (error) {
    logger.error(`⛔👈fetchCompany: Error fetching companies: ${error}`);
  }
  return null;
}

export async function getCompanyByID(id: string): Promise<CompanyClass | null> {
  return fetchCompany({ accountId: id });
}

export async function getCompanyBySlug(slug: string): Promise<CompanyClass | null> {
  return fetchCompany({ slug: slug });
}

export async function getAllCompanies(): Promise<CompanyClass[]> {
  logger.debug('👉getAllCompanies');
  const config: FetchConfig = {
    endpoint: 'http://plex.work.tnxs.net:8080/v1/companies?limit=1000',
  };

  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`⛔getAllCompanies: Error fetching companies: ${response.statusText}`);
    }
    const restResponse: CompanyResponse = await response.json();
    logger.debug('👈getAllCompanies: done', { data: restResponse.Data.length });
    return restResponse.Data;
  } catch (error) {
    logger.error(`⛔getAllCompanies: Error fetching companies: ${error}`);
  }
  return [];
}

export async function getAllCompanySlugs(): Promise<{ slugs: string[] }> {
  logger.debug('👉getAllCompanySlugs')
  const config: FetchConfig = {
    endpoint: 'http://crm.work.tnxs.net:8080/v1/accounts',
    queryParams: {
      active: 'true',
    },
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`Error fetching active accounts: ${response.statusText}`);
    }
    const restResponse: CompanyResponse = await response.json();
    var _slugs = restResponse.Data.map((company) => company.Slug);
    logger.debug('👈getAllActiveAccounts: done', { data: restResponse.Data.length });
    return { slugs: _slugs };
  } catch (error) {
    logger.error(`⛔getAllActiveAccounts: Error fetching active accounts: ${error}`);
  }
  return { slugs: [] };
}

export function getCompaniesPerPage() {
  if (process.env.COMPANIES_PER_PAGE) {
    return Number(process.env.COMPANIES_PER_PAGE);
  } else {
    return 18;
  }
}

export async function getCompanyCategories() {
  logger.debug(`👉getCompanyCategories`);
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

  const restResponse: CompanyCategoryResponse = await response.json();
  const _companyCategories = restResponse.Data.map((category) => new CompanyCategoryClass(category));

  logger.debug(`👈getCompanyCategories: ${_companyCategories.length}`);
  return { companyCategories: _companyCategories };
};

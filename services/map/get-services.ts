import 'server-only'
import { ServiceClass, ServiceResponse } from '@/types/service'
import { createFetchConfig, FetchConfig } from '@/lib/fetch-config'
import { logger } from '@/lib/logger'

export async function getAllServices(): Promise<{ services: ServiceClass[] }> {
  logger.debug('👉getAllServices')
  const config: FetchConfig = {
    endpoint: 'http://research.work.tnxs.net:8080/v1/companyservices',
    queryParams: {
      limit: '200',
    },
  }
  try {
    const { headers, url } = createFetchConfig(config, 'GET')
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    })
    if (!response.ok) {
      throw new Error(`⛔getAllServices: Error fetching services: ${response.statusText}`)
    }
    const restResponse: ServiceResponse = await response.json()
    const _services = restResponse.Data.map((service) => {
      return new ServiceClass(service)
    })
    logger.debug(`👈getAllServices: ${_services.length}`)
    return { services: _services }
  } catch (error) {
    logger.error(`⛔getAllServices: Error fetching services: ${error}`)
  }
  return { services: [] }
}

export async function getAllServiceSlugs(): Promise<{ slugs: string[] }> {
  logger.debug('👉getAllServiceSlugs')
  const config: FetchConfig = {
    endpoint: 'http://research.work.tnxs.net:8080/v1/companyservices',
    queryParams: {
      limit: '200',
    },
  }
  try {
    const { headers, url } = createFetchConfig(config, 'GET')
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    })
    if (!response.ok) {
      throw new Error(`⛔getAllServiceSlugs: Error fetching services: ${response.statusText}`)
    }
    const restResponse: ServiceResponse = await response.json()
    const _slugs = restResponse.Data.map((service) => {
      return service.Slug
    })
    logger.debug(`👈getAllServiceSlugs: ${_slugs.length}`)
    if (_slugs.length == undefined) {
      logger.error(`⛔getAllServiceSlugs: No slugs found`)
      return { slugs: [] }
    }
    return { slugs: _slugs.filter((slug): slug is string => slug !== undefined) }
  } catch (error) {
    logger.error(`⛔getAllServiceSlugs: Error fetching service slugs: ${error}`)
  }
  return { slugs: [] }
}

export async function getServiceBySlug(slug: string): Promise<ServiceClass | null> {
  logger.debug(`👉getServiceBySlug: ${slug}`)
  const config: FetchConfig = {
    endpoint: 'http://research.work.tnxs.net:8080/v1/companyservices',
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
      throw new Error(`⛔getServiceBySlug: Error fetching services: ${response.statusText}`);
    }
    const restResponse: ServiceResponse = await response.json();
    logger.debug(`👈getServiceBySlug: n = ${restResponse.Data.length}`);
    return new ServiceClass(restResponse.Data[0]);
  } catch (error) {
    logger.error(`⛔getServiceBySlug: Error fetching services: ${error}`);
  }
  return null;
}

export function getServicesPerPage(): number {
  if (process.env.SERVICES_PER_PAGE) {
    return parseInt(process.env.SERVICES_PER_PAGE)
  } else {
    return 12
  }
}
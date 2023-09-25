import { logger } from '@/lib/logger';
import { auth } from '@clerk/nextjs';

export interface FetchConfig {
  endpoint: string;
  queryParams?: Record<string, string>;
  auth?: any;
}

export function createFetchConfig(config: FetchConfig, method: 'GET' | 'POST' | 'PUT'): { headers: Headers; url: URL } {
  const { endpoint, queryParams, auth } = config;
  const apiKey = process.env.VK_MICROSERVICES_APIKEY;

  if (!apiKey) {
    throw new Error('VK_MICROSERVICES_APIKEY environment variable is not set');
  }
  const headers = new Headers();
  headers.append('X-API-Key', apiKey);
  headers.append('Content-Type', 'application/json');
  if (auth && auth.userId) {
    headers.append('X-Auth0-UserID', auth.userId);
  }

  const url = new URL(endpoint);

  if (queryParams) {
    const urlSearchParams = new URLSearchParams(queryParams);
    url.search = urlSearchParams.toString();
  }

  if (method === 'GET') {
    headers.delete('Content-Type');
  }

  return { headers, url };
}


export async function fetchAPI<T>(config: FetchConfig, method: 'GET' | 'POST' | 'PUT' = 'GET', data?: T): Promise<T[]> {
  const { headers, url } = createFetchConfig(config, method);
  const options: RequestInit = {
    method: method,
    headers: headers,
  };

  if (data && (method === 'POST' || method === 'PUT')) {
    options.body = JSON.stringify({ Data: [data] });
    options.headers = { ...options.headers, 'Content-Type': 'application/json' };
  }

  try {
    const response = await fetch(url.toString(), options);
    if (!response.ok) {
      throw new Error(`⛔ ${method}: Error: ${response.statusText}`);
    }
    const restResponse = await response.json();
    return restResponse.Data;
  } catch (error) {
    logger.error(`⛔ ${method}: Error: ${error}`);
    return [];
  }
}

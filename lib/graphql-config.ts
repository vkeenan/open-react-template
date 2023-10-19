import { logger } from '@/lib/logger';

export interface GraphQLConfig {
  endpoint: string;
}

export function createGraphQLConfig(config: GraphQLConfig): { headers: Headers; url: URL } {
  // Retrieve username and password
  const username = process.env.WORK_WP_APP_USERNAME;
  const app_password = process.env.WORK_WP_APP_PASSWORD;

  if (!username || !app_password) {
    throw new Error("Username or password environment variable is missing");
  }

  // Encode credentials for Bearer auth
  const auth_string = `${username}:${app_password}`;
  const auth_encoded = Buffer.from(auth_string).toString('base64');

  const headers = new Headers();

  // Use Bearer auth instead of X-Auth
  headers.append('Authorization', `Bearer ${auth_encoded}`);

  const url = new URL(config.endpoint);

  return { headers, url };
}

export async function graphqlAPI<T>(config: GraphQLConfig, query: string, variables?: []): Promise<T[]> {
  if (!config.endpoint) {
    logger.error(`⛔ graphqlAPI Error: Endpoint is missing`);
  }
  if (!query) {
    logger.error(`⛔ graphqlAPI Error: Query is missing`);
  }
  const { headers, url } = createGraphQLConfig(config);
  const options: RequestInit = {
    headers: headers,
    method: 'POST',

  };

  if (query) {
    options.body = JSON.stringify({
      query,
      variables,
    });
    options.headers = { ...options.headers, 'Content-Type': 'application/json' };
  }

  try {
    const response = await fetch(url.toString(), options);
    if (!response.ok) {
      logger.error(`⛔ graphqlAPI Error: ${response.statusText}`);
    }
    const restResponse = await response.json();
    return restResponse;
  } catch (error) {
    logger.error(`⛔ graphqlAPIError: ${error}`);
    return [];
  }
}

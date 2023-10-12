'use server';

import { UserAuthClass } from '@/types/user';
import { createFetchConfig as createFetchConfigFunction, FetchConfig } from '@/lib/fetch-config';
import { logger } from '@/lib/logger';

export async function userWebAuth(email: string, password: string): Promise<UserAuthClass | null> {
  logger.debug(`userWebAuth: ${email}`);
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/users/auth',
  };
  const { headers, url } = createFetchConfigFunction(config, 'POST');
  const response = await fetch(url.toString(), {
    method: 'POST',
    body: JSON.stringify({
      Email: email,
      Password: password,
    }),
    headers: headers,
  });
  if (!response.ok) {
    logger.error(`Error getting user authorization: ${response.statusText}`);
    return null;
  }
  const restResponse: UserAuthClass = await response.json();

  logger.debug(`userWebAuth: ${restResponse}`);
  return restResponse;
}

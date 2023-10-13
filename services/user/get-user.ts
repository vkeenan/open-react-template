'use server';

import { UserResponse, UserClass } from '@/types/user';
import { createFetchConfig, FetchConfig } from '@/lib/fetch-config';
import { logger } from '@/lib/logger';

export interface PostUserOnboardResponse {
  Data: UserClass[];
}

export async function getWebUserByEmail(email: string): Promise<UserClass | null> {
  logger.debug(`👉getWebUserByEmail: ${email}`);
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/users',
    queryParams: {
      email: email,
    },
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.statusText}`);
    }
    const restResponse: UserResponse = await response.json();
    logger.debug(`👈getWebUserByEmail: user found: ${restResponse.Data[0].ID}`);
    return restResponse.Data[0];
  } catch (error) {
    logger.error(`❌getWebUserByEmail: Error fetching user: ${error}`);
  }
  return null;
}

export async function getUserByID(userID: string): Promise<UserClass | null> {
  logger.debug(`👉getUserByID: ${userID}`);
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/users',
    queryParams: {
      userID: userID,
    },
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.statusText}`);
    }
    const restResponse: UserResponse = await response.json();
    logger.debug(`👈getUserByID: user found: ${restResponse.Data[0].Name}`);
    return restResponse.Data[0];
  } catch (error) {
    logger.error(`⛔getUserByID: Error fetching user: ${error}`);
  }
  return null;
}

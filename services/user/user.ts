import { UserResponse, UserClass } from '@/types/user';
import { createFetchConfig, FetchConfig } from '@/lib/fetch-config';
import { logger } from '@/lib/logger';

export async function putUser(user: any) {
  logger.debug(`👉putUser: ${JSON.stringify(user)}`);

  const url = '/api/put-user';

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`Error putting user: ${response.statusText}`);
  }

  const restResponse: any = await response.json();
  logger.debug(`👈putUser: done ${JSON.stringify(restResponse)}`);
  return new UserClass(restResponse?.Data[0]);
}

export interface PostUserOnboardResponse {
  Data: UserClass[];
}

export async function getUserByAuth0UserID(auth0UserID: string): Promise<UserClass | null> {
  logger.debug(`👉getUserByAuth0UserID: ${auth0UserID}`);
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/users',
    queryParams: {
      auth0UserId: auth0UserID,
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
    logger.debug(`👈getUserByAuth0UserID: user found: ${restResponse.Data[0].ID}`);
    return restResponse.Data[0];
  } catch (error) {
    logger.error(`⛔getUserByAuth0UserID: Error fetching user: ${error}`);
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

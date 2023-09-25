import { createFetchConfig, FetchConfig } from '@/lib/api';
import { logger } from '@/lib/logger';
import { UserClass, UserResponse } from '@/types/user';

export interface PostUserOnboardResponse {
  Data: UserClass[];
}

export async function postUserOnboard(email: string): Promise<PostUserOnboardResponse | null> {
  logger.debug(`postUserOnboard: ${email}`);
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/users/onboard',
  };
  const { headers, url } = createFetchConfig(config, 'GET');
  const response = await fetch(url.toString(), {
    method: 'POST',
    body: JSON.stringify({ Data: [{ Email: email }] }),
    headers: headers,
  });
  if (!response.ok) {
    logger.error(`Error posting user onboarding: ${response.statusText}`);
    return null;
  }
  const restResponse: UserResponse = await response.json();

  return { Data: restResponse.Data };
}
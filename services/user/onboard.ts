'use server';

import { UserResponse as UserResponseClass, UserClass } from '@/types/user';
import { createFetchConfig as createFetchConfigFunction, FetchConfig } from '@/lib/fetch-config';
import { logger } from '@/lib/logger';

export async function userOnboard(user: UserClass): Promise<UserClass | null> {
  logger.debug(`userOnboardEmailOnly: ${user.Email}, ${user.Phone}`);
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/users/onboard',
  };
  const { headers, url } = createFetchConfigFunction(config, 'POST');
  user.PortalRole = 'web';
  const response = await fetch(url.toString(), {
    method: 'POST',
    body: JSON.stringify({
      Data: [user]
    }),
    headers: headers,
  });
  if (!response.ok) {
    logger.error(`Error posting user onboarding: ${response.statusText}`);
    return null;
  }
  const restResponse: UserResponseClass = await response.json();

  return restResponse.Data[0];
}

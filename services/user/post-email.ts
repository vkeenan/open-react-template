'use server';

import { UserResponse as UserResponseClass, UserClass } from '@/types/user';
import { createFetchConfig as createFetchConfigFunction, FetchConfig } from '@/lib/fetch-config';
import { logger as loggerInstance } from '@/lib/logger';

export async function userPostEmail(email: string): Promise<UserClass | null> {
  loggerInstance.debug(`userPostEmail: ${email}`);
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/users/onboard',
  };
  const { headers, url } = createFetchConfigFunction(config, 'POST');
  const response = await fetch(url.toString(), {
    method: 'POST',
    body: JSON.stringify({ Data: [{ Email: email }] }),
    headers: headers,
  });
  if (!response.ok) {
    loggerInstance.error(`Error posting user onboarding: ${response.statusText}`);
    return null;
  }
  const restResponse: UserResponseClass = await response.json();

  return restResponse.Data[0];
}

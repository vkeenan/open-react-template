'use server';

import { UserResponse, UserClass } from "@/types/user";
import { createFetchConfig, FetchConfig } from "@/lib/fetch-config";
import { logger } from "@/lib/logger";

export async function postUser(user: UserClass): Promise<UserClass | null> {
  logger.debug(`postUser: ${user.ID}`);
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/users',
  };
  const { headers, url } = createFetchConfig(config, 'PUT');
  const response = await fetch(url.toString(), {
    method: 'POST',
    body: JSON.stringify({
      Data: [user]
    }),
    headers: headers,
  });
  if (!response.ok) {
    logger.error(`Error posting user: ${response.statusText}`);
    return null;
  }
  const restResponse: UserResponse = await response.json();
  logger.debug(`postUser: user posted: ${restResponse.Data[0].ID}`);
  return restResponse.Data[0];
}

import 'server-only';
import { createFetchConfig, FetchConfig } from '@/lib/fetch-config';
import { logger } from '@/lib/logger';
import {
  AccountClass,
  AccountNameClass,
  AccountNamesResponse,
  AccountResponse
} from '@/types/account';

async function fetchAccount(queryParams: Record<string, string>): Promise<AccountClass | null> {
  logger.debug(`👉fetchAccount:${queryParams}`);
  const config: FetchConfig = {
    endpoint: 'http://crm.vernonkeenan.com:8080/v1/accounts',
    queryParams,
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
      throw new Error(`Error fetching accounts: ${response.statusText}`);
    }
    const restResponse: AccountResponse = await response.json();
    logger.debug(`👈fetchAccount: n=${restResponse.Data.length}`);
    return new AccountClass(restResponse.Data[0]);
  } catch (error) {
    logger.error(`⛔fetchAccount: Error fetching accounts: ${error}`);
  }
  return null;
}

export async function getAccountByAccountID(id: string): Promise<AccountClass | null> {
  return fetchAccount({ accountId: id });
}

export async function getAccountBySlug(slug: string): Promise<AccountClass | null> {
  return fetchAccount({ slug: slug });
}

export async function getAllAccountNames(): Promise<{ accountNames: AccountNamesResponse | null }> {
  logger.debug('👉getAllAccountNames')
  const config: FetchConfig = {
    endpoint: 'http://crm.vernonkeenan.com:8080/v1/accounts',
    queryParams: {
      active: 'true',
    },
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`Error fetching active accounts: ${response.statusText}`);
    }
    const restResponse: AccountResponse = await response.json();
    const _accountNames = new AccountNamesResponse();
    for (const accountData of restResponse.Data) {
      const accountNameData = {
        Name: accountData.Name,
        AccountID: accountData.AccountID
      };
      const accountName = new AccountNameClass(accountNameData);
      _accountNames.Data.push(accountName);
    }

    logger.debug('👈getAllActiveAccounts: done', { data: restResponse.Data.length });
    return { accountNames: _accountNames };
  } catch (error) {
    logger.error(`⛔getAllAccountNames: Error fetching accounts: ${error}`);
  }
  return { accountNames: null };

}
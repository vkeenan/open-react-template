import { Page } from './graphql';
export interface PageResult {
  page: Page | undefined;
}

export function IsPage(data: any): data is Page {
  return data && typeof data.content === 'string';  // ...and other necessary checks
}
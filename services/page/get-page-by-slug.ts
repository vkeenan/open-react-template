import { getPageByUri } from '@/services/page/get-page-by-uri';

export async function getPageBySlug(slug: string) {
  if (slug) {
    return await getPageByUri('/' + slug + '/');
  }
  return null;
}

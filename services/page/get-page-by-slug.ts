import { getPageByUri } from './get-page-by-uri';
import slugMappingData from '@/data/slug-mapping.json';
const slugMapping: { [key: string]: string } = slugMappingData;

export async function getPageBySlug(slug: string) {
  const theUri = slugMapping[slug];
  if (theUri) {
    return await getPageByUri(theUri);
  }
  return null;
}

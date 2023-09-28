/* eslint-disable no-console */
import { getApolloClient } from '@/lib/apollo-client';
import { logger } from '@/lib/logger';
import { mapPageData } from './map-page-data';

import { QUERY_PAGE_BY_URI, QUERY_PAGE_SEO_BY_URI } from '@/data/pages';

export async function getPageByUri(uri: string) {
  logger.debug(`👉getPageByUri: ${uri}`)
  const apolloClient = getApolloClient();
  let apiHost = '';
  if (process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) {
    apiHost = new URL(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT).host;
  }

  let pageData;
  let seoData;

  try {
    pageData = await apolloClient.query({
      query: QUERY_PAGE_BY_URI,
      variables: {
        uri,
      },
    });
  } catch (e: any) {
    logger.error(
      `💣 getPageByUri: Failed to query page data: ${e.message}`
    );
    throw e;
  }

  if (!pageData?.data.page) return { page: undefined };

  const page = [pageData?.data.page].map(mapPageData)[0];

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  try {
    seoData = await apolloClient.query({
      query: QUERY_PAGE_SEO_BY_URI,
      variables: {
        uri,
      },
    });
  } catch (e: any) {
    logger.error(
      `💣 getPageByUri: Failed to query SEO plugin: ${e.message}`
    );
    logger.error(
      '💣 getPageByUri: Is the SEO Plugin installed?'
    );
    throw e;
  }

  const { seo = {} } = seoData?.data?.page || {};

  (page as any).metaTitle = seo.title;
  (page as any).description = seo.metaDesc;
  (page as any).readingTime = seo.readingTime;

  // The SEO plugin by default includes a canonical link, but we don't want to use that
  // because it includes the WordPress host, not the site host. We manage the canonical
  // link along with the other metadata, but explicitly check if there's a custom one
  // in here by looking for the API's host in the provided canonical link

  if (seo.canonical && !seo.canonical.includes(apiHost)) {
    (page as any).canonical = seo.canonical;
  }

  (page as any).og = {
    author: seo.opengraphAuthor,
    description: seo.opengraphDescription,
    image: seo.opengraphImage,
    modifiedTime: seo.opengraphModifiedTime,
    publishedTime: seo.opengraphPublishedTime,
    publisher: seo.opengraphPublisher,
    title: seo.opengraphTitle,
    type: seo.opengraphType,
  };

  (page as any).robots = {
    nofollow: seo.metaRobotsNofollow,
    noindex: seo.metaRobotsNoindex,
  };

  (page as any).twitter = {
    description: seo.twitterDescription,
    image: seo.twitterImage,
    title: seo.twitterTitle,
  };
  logger.debug(`👈getPageByUri`)
  return {
    page,
  };
}

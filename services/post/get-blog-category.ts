import { getApolloClient } from '@/lib/apollo-client';
import { logger } from '@/lib/logger';
import { mapCategoryData } from './map-category-data';

import {
  QUERY_CATEGORY_BY_SLUG,
  QUERY_CATEGORY_SEO_BY_SLUG,
  QUERY_ALL_CATEGORIES
} from '@/data/categories';

export async function getAllBlogCategories() {
  const apolloClient = getApolloClient();
  const data = await apolloClient.query({
    query: QUERY_ALL_CATEGORIES,
  });
  const categories = data?.data.categories.edges.map(({ node = {} }) => node);
  return {
    categories,
  };
}

export async function getBlogCategoryBySlug(slug: string) {
  logger.debug(`👉getBlogCategoryBySlug: ${slug}`)
  const apolloClient = getApolloClient();
  let apiHost = '';
  if (process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) {
    apiHost = new URL(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT).host;
  }

  let categoryData;
  let seoData;

  try {
    categoryData = await apolloClient.query({
      query: QUERY_CATEGORY_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e: any) {
    logger.error(
      `💣 getBlogCategoryBySlug: Failed to query category data: ${e.message}`
    );
    throw e;
  }

  if (!categoryData?.data.category) return { category: undefined };

  const category = mapCategoryData(categoryData?.data.category);

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  try {
    seoData = await apolloClient.query({
      query: QUERY_CATEGORY_SEO_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e: any) {
    logger.error(
      `💣 getBlogCategoryBySlug: Failed to query SEO plugin: ${e.message}`
    );
    logger.error(
      '💣 getBlogCategoryBySlug: Is the SEO Plugin installed?'
    );
    throw e;
  }

  const { seo = {} } = seoData?.data?.category || {};

  (category as any).title = seo.title;
  (category as any).description = seo.metaDesc;

  // The SEO plugin by default includes a canonical link, but we don't want to use that
  // because it includes the WordPress host, not the site host. We manage the canonical
  // link along with the other metadata, but explicitly check if there's a custom one
  // in here by looking for the API's host in the provided canonical link

  if (seo.canonical && !seo.canonical.includes(apiHost)) {
    (category as any).canonical = seo.canonical;
  }

  (category as any).og = {
    author: seo.opengraphAuthor,
    description: seo.opengraphDescription,
    image: seo.opengraphImage,
    modifiedTime: seo.opengraphModifiedTime,
    publishedTime: seo.opengraphPublishedTime,
    publisher: seo.opengraphPublisher,
    title: seo.opengraphTitle,
    type: seo.opengraphType,
  };

  (category as any).article = {
    author: (category as any).og.author,
    modifiedTime: (category as any).og.modifiedTime,
    publishedTime: (category as any).og.publishedTime,
    publisher: (category as any).og.publisher,
  };

  (category as any).robots = {
    nofollow: seo.metaRobotsNofollow,
    noindex: seo.metaRobotsNoindex,
  };

  (category as any).twitter = {
    description: seo.twitterDescription,
    image: seo.twitterImage,
    title: seo.twitterTitle,
  };
  logger.debug(`👈getBlogCategoryBySlug: ${category}`)

  return {
    category,
  };
}

export function categoryPathBySlug(slug: string) {
  return `/posts/category/${slug}`;
}

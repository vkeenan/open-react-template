import { getApolloClient } from '@/lib/apollo-client';
import { logger } from '@/lib/logger';
import { mapPostData } from './map-post-data';
import { QUERY_POST_BY_SLUG, QUERY_POST_SEO_BY_SLUG } from '@/data/posts';

export async function getPostBySlug(slug: string) {
  logger.debug(`👉getPostBySlug: ${slug}`);
  const apolloClient = getApolloClient();
  let host: string;
  if (process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) {
    host = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;
  } else {
    return { post: undefined };
  }
  const apiHost = new URL(host).host;

  let postData;
  let seoData;

  try {
    postData = await apolloClient.query({
      query: QUERY_POST_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e: any) {
    logger.error(
      `💣 getPostBySlug: Failed to query post data: ${e.message}`
    );
    throw e;
  }

  if (!postData?.data.post) return { post: undefined };

  const post = [postData?.data.post].map(mapPostData)[0];

  try {
    seoData = await apolloClient.query({
      query: QUERY_POST_SEO_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e: any) {
    logger.error(
      `💣 getPostBySlug: Failed to query SEO plugin: ${e.message}`
    );
    logger.error(
      '💣 getPostBySlug: Is the SEO Plugin installed?'
    );
    throw e;
  }

  const { seo = {} } = seoData?.data?.post || {};

  (post as any).metaTitle = seo.title;
  (post as any).metaDescription = seo.metaDesc;
  (post as any).readingTime = seo.readingTime;

  // The SEO plugin by default includes a canonical link, but we don't want to use that
  // because it includes the WordPress host, not the site host. We manage the canonical
  // link along with the other metadata, but explicitly check if there's a custom one
  // in here by looking for the API's host in the provided canonical link

  if (seo.canonical && !seo.canonical.includes(apiHost)) {
    (post as any).canonical = seo.canonical;
  }

  (post as any).og = {
    author: seo.opengraphAuthor,
    description: seo.opengraphDescription,
    image: seo.opengraphImage,
    modifiedTime: seo.opengraphModifiedTime,
    publishedTime: seo.opengraphPublishedTime,
    publisher: seo.opengraphPublisher,
    title: seo.opengraphTitle,
    type: seo.opengraphType,
  };

  (post as any).article = {
    author: (post as any).og.author,
    modifiedTime: (post as any).og.modifiedTime,
    publishedTime: (post as any).og.publishedTime,
    publisher: (post as any).og.publisher,
  };

  (post as any).robots = {
    nofollow: seo.metaRobotsNofollow,
    noindex: seo.metaRobotsNoindex,
  };

  (post as any).twitter = {
    description: seo.twitterDescription,
    image: seo.twitterImage,
    title: seo.twitterTitle,
  };
  logger.debug(`👉getPostBySlug`);
  return {
    post,
  };
}

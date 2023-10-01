import { getApolloClient } from '../lib/apollo-client';
import { logger } from '../lib/logger';
import {
  QUERY_POSTS_BY_AUTHOR_SLUG,
  QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
  QUERY_POSTS_BY_AUTHOR_SLUG_INDEX
} from '@/data/posts';
import { mapPostData } from '@/services';

const postsByAuthorSlugIncludesTypes = {
  all: QUERY_POSTS_BY_AUTHOR_SLUG,
  archive: QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
  index: QUERY_POSTS_BY_AUTHOR_SLUG_INDEX,
};

export async function getPostsByAuthorSlug(slug: string, options = {}) {
  logger.debug(`👉getPostsByAuthorSlug: ${slug}`);
  const { queryIncludes = 'index' }: any = options as string;

  const apolloClient = getApolloClient();

  let postData;

  try {
    postData = await apolloClient.query({
      // @ts-ignore: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ all: DocumentNode; archive: DocumentNode; index: DocumentNode; }'
      query: postsByAuthorSlugIncludesTypes[queryIncludes],
      variables: {
        slug: slug,
      },
    });
  } catch (e: any) {
    logger.error(
      `💣 getPostsByAuthorSlug: Failed to query post data: ${e.message}`
    );
    throw e;
  }

  const posts = postData?.data.posts.edges.map(({ node = {} }) => node);
  logger.debug(`👈getPostsByAuthorSlug`);
  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}
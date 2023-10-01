/* eslint-disable no-console */
import { getApolloClient } from '@/lib/apollo-client';
import { logger } from '@/lib/logger';
import {
  QUERY_POSTS_BY_CATEGORY_ID,
  QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
  QUERY_POSTS_BY_CATEGORY_ID_INDEX,
} from '@/data/posts';
import { mapPostData } from './map-post-data';

const postsByCategoryIdIncludesTypes = {
  all: QUERY_POSTS_BY_CATEGORY_ID,
  archive: QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
  index: QUERY_POSTS_BY_CATEGORY_ID_INDEX,
};

export async function getPostsByCategoryId(categoryId: number, options = {}) {
  logger.debug(`👉getPostsByCategoryId: ${categoryId}`);
  const { queryIncludes = 'index' }: any = options as string;
  const apolloClient = getApolloClient();
  let postData;
  try {
    postData = await apolloClient.query({
      // @ts-ignore: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ all: DocumentNode; archive: DocumentNode; index: DocumentNode; }'
      query: postsByCategoryIdIncludesTypes[queryIncludes],
      variables: {
        categoryId: categoryId,
      },
    });
  } catch (e: any) {
    logger.error(
      `💣 getPostsByCategoryId: Failed to query post data: ${e.message}`
    );
    throw e;
  }

  const posts = postData?.data.posts.edges.map(({ node = {} }) => node);
  logger.debug(`👈getPostsByCategoryId`);
  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

import "server-only";
import { getApolloClient } from "@/lib/apollo-client";
import { logger } from "@/lib/logger";
import {
  QUERY_ALL_POSTS,
  QUERY_ALL_POSTS_ARCHIVE,
  QUERY_ALL_POSTS_INDEX,
} from "@/data/posts";
import { mapPostData } from "./map-post-data";

const allPostsIncludesTypes = {
  all: QUERY_ALL_POSTS,
  archive: QUERY_ALL_POSTS_ARCHIVE,
  index: QUERY_ALL_POSTS_INDEX,
};

export async function getAllPosts(options = {}) {
  logger.debug("👉getAllPosts");
  const { queryIncludes = "index" } = options;
  const apolloClient = getApolloClient();
  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const posts = data?.data.posts.edges.map(({ node = {} }) => node);
  logger.debug(`👈getAllPosts ${posts.length} posts`);
  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

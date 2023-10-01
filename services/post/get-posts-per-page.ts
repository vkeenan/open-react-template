import { getApolloClient } from '@/lib/apollo-client';
import { logger } from '@/lib/logger';
import { QUERY_POST_PER_PAGE } from '@/data/posts';

/* eslint-disable no-console */
export async function getPostsPerPage() {
  //If POST_PER_PAGE is defined at next.config.js
  if (process.env.POSTS_PER_PAGE) {
    logger.warn(
      '⚠️ getPostsPerPage: You are using the deprecated POST_PER_PAGE variable. Use your WordPress instance instead to set this value ("Settings" > "Reading" > "Blog pages show at most").'
    );
    return Number(process.env.POSTS_PER_PAGE);
  }

  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_POST_PER_PAGE,
    });

    return Number(data.allSettings.readingSettingsPostsPerPage);
  } catch (e: any) {
    logger.error(`💣 getPostsPerPage: Failed to query post per page data: ${e.message}`);
    throw e;
  }
}

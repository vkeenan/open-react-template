import { sortObjectsByDate } from '@/lib/datetime';
import { logger } from '@/lib/logger';
import { getAllPosts } from './get-all-posts';

export async function getRecentPosts({ count, ...options }: any) {
  logger.debug(`👉getRecentPosts: ${count}`);
  const { posts } = await getAllPosts(options);
  const sorted = sortObjectsByDate(posts);
  logger.debug(`👈getRecentPosts`);
  return {
    posts: sorted.slice(0, count),
  };
}

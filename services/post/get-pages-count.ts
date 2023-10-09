import { getPostsPerPage } from './index';

export async function getPagesCount(posts: any, postsPerPage: number) {
  const _postsPerPage = postsPerPage ?? (await getPostsPerPage());
  return Math.ceil(posts.length / _postsPerPage);
}

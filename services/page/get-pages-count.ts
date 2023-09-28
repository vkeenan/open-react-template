import { getPostsPerPage } from './get-posts-per-page';

export async function getPagesCount(posts: any, postsPerPage: number) {
  const _postsPerPage = postsPerPage ?? (await getPostsPerPage());
  return Math.ceil(posts.length / _postsPerPage);
}

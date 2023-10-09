export function sortStickyPosts(posts: any) {
  return [...posts].sort((post) => (post.isSticky ? -1 : 1));
}

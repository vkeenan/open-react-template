import { sortObjectsByDate } from '../sort-objects-by-date';
import { getPostsByCategoryId } from './get-posts-by-category-id';

export async function getRelatedPosts(categories: any, postId: string, count = 5) {
  if (!Array.isArray(categories) || categories.length === 0) return;

  let related = {
    category: categories && categories.shift(),
    posts: [],
  };
  const categoryId = related.category.databaseId as number;
  if (related.category) {
    const { posts } = await getPostsByCategoryId(categoryId);
    if (posts && posts.length > 0) {
      const filtered = posts.filter(({ postId: id }: any) => id !== postId);
      const sorted = sortObjectsByDate(filtered);
      related.posts = sorted.map((post: any) => ({
        title: post.title,
        slug: post.slug,
      }));
    }
  }

  if (
    !Array.isArray((related as any).posts) ||
    (related as any).posts.length === 0
  ) {
    const relatedPosts = await getRelatedPosts(categories, postId, count);
    related = relatedPosts || related;
  }

  if (
    Array.isArray((related as any).posts) &&
    (related as any).posts.length > count
  ) {
    return (related as any).posts.slice(0, count);
  }

  return related;
}

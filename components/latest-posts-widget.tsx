import { getRecentPosts } from "@/services/post/get-recent-posts";
import { PostCardSm } from "./post-card-sm";
import { logger } from "../lib/logger";

export async function LatestPostsWidget() {
  logger.debug("⚠️ LatestPostsWidget: top");
  const NUM_POSTS = 5;
  const { posts: recentPosts } = await getRecentPosts({
    count: NUM_POSTS,
    queryIncludes: "index",
  });
  return (
    <div className="flex flex-col w-full p-6 pb-20 mb-3 shadow bg-cocoa_brown-50">
      <h3 className="mt-2 mb-4 text-2xl font-display">Recent Posts</h3>
      {recentPosts.map((post: any, index: number) => (
        <PostCardSm
          key={index}
          slug={post.slug}
          date={post.date}
          categories={post.categories}
          title={post.title}
        />
      ))}
    </div>
  );
}

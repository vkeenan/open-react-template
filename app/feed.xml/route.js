import { getAllPosts } from "@/services/post/get-all-posts";
const URL = "https://workdifferentwithai.com";

function generateRSSFeed(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>WorkDifferentWithAI.com Feed</title>
        <link>${URL}/feed</link>
        <description>Recent updates from WorkDifferentWithAI.com</description>
        <language>en-us</language>
        ${posts
          .map((post) => {
            return `
              <item>
                <title>${post.title}</title>
                <link>${URL}/posts/${post.slug}</link>
                <pubDate>${new Date(post.date).toUTCString()}</pubDate>
                <description>${post.excerpt}</description>
              </item>
            `;
          })
          .join("")}
      </channel>
    </rss>
  `;
}

export async function GET() {
  const posts = await getAllPosts();
  const body = generateRSSFeed(posts.posts);

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/rss+xml",
    },
  });
}

import { HeroCard, Pagination, PostCard } from "@/components/posts";
import { getPaginatedPosts } from "@/services/get-paginated";
export const dynamic = "force-static";

export async function generateStaticParams() {
  const { pagination }: any = await getPaginatedPosts();
  const params = [];
  for (let i = 1; i <= pagination.pagesCount; i++) {
    params.push({
      pageNum: i.toString(),
    });
  }
  return params;
}

export default async function AdditionalPosts({ params }: any) {
  const { posts, pagination } = await getPaginatedPosts({
    currentPage: params?.pageNum,
  });
  const basePath = "posts";
  const heroPost = posts[0];
  const morePosts = posts.slice(1, posts.length);

  // const { metadata } = usePageMetadata({
  //   metadata: {
  //     title,
  //     description: `Page ${pagination.currentPage}`,
  //   },
  // });

  return (
    <>
      <HeroCard heroPost={heroPost} />
      <h2 className="mt-12 mb-4 text-3xl font-display">
        Additional Posts, page {params.pageNum}
      </h2>
      <div className="container px-4 mx-auto my-12 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {morePosts.map((post, index) => (
            <PostCard
              key={index}
              slug={post.slug}
              date={post.date}
              categories={post.categories}
              title={post.title}
              featuredImage={post.featuredImage}
            />
          ))}
        </div>
      </div>
      {pagination && (
        <Pagination
          addCanonical={false}
          currentPage={pagination?.currentPage}
          pagesCount={pagination?.pagesCount}
          basePath={basePath}
        />
      )}
    </>
  );
}

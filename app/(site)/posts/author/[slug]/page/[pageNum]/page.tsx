import { HeroCard, Pagination, PostCard } from "@/components/posts";
import { getAllAuthors, getAuthorBySlug } from "@/services/author/get-author";
import { getPaginatedAuthorPosts } from "@/services";
export const dynamic = "force-static";

export async function generateStaticParams() {
  const { authors } = await getAllAuthors();
  if (authors) {
    const params = [];
    for (const author of authors) {
      const { pagination }: any = await getPaginatedAuthorPosts({
        authorSlug: author.slug,
      });
      for (let i = 1; i <= pagination.pagesCount; i++) {
        params.push({
          slug: author.slug,
          pageNum: i.toString(),
        });
      }
    }
    return params;
  } else {
    return [];
  }
}

export default async function AdditionalAuthorPosts({ params }: any) {
  const { author }: any = await getAuthorBySlug(params?.slug);
  if (!author) {
    return {
      props: {},
      notFound: true,
    };
  }
  const basePath = "/posts/author/" + params?.slug;
  const { posts, pagination }: any = await getPaginatedAuthorPosts({
    currentPage: params?.pageNum || 1,
    authorSlug: author.slug,
  });
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
      <h2 className="mt-6 text-3xl font-display xl:text-6xl">
        Additional Posts by {author.name}
      </h2>
      <div className="container px-4 mx-auto my-12 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {morePosts.map((post: any, index: number) => (
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

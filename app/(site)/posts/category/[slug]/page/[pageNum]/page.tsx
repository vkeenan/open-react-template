import { HeroCard, Pagination, PostCard } from "@/components/posts";
import { getAllBlogCategories, getBlogCategoryBySlug } from "@/services/post";
import { getPaginatedCategoryPosts } from "@/services";
export const dynamic = "force-static";

export async function generateStaticParams() {
  const { categories } = await getAllBlogCategories();
  if (categories) {
    const params = [];
    for (const category of categories) {
      const { pagination }: any = await getPaginatedCategoryPosts({
        categoryId: category.databaseId,
      });
      for (let i = 1; i <= pagination.pagesCount; i++) {
        params.push({
          slug: category.slug,
          pageNum: i.toString(),
        });
      }
    }
    return params;
  } else {
    return [];
  }
}

export default async function AdditionalCategoryPosts({ params }: any) {
  const { category }: any = await getBlogCategoryBySlug(params?.slug);
  if (!category) {
    return {
      props: {},
      notFound: true,
    };
  }
  const basePath = "/posts/category/" + params?.slug;
  const { posts, pagination }: any = await getPaginatedCategoryPosts({
    currentPage: params?.pageNum || 1,
    categoryId: category.databaseId,
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
        Additional Posts in {category.name}
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

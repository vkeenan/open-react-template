import { getAllBlogCategories } from "@/services/post";
import { BlogCategoryCard } from "@/components/posts";

export default async function BlogCategoriesPage({ params }: any) {
  const { categories } = await getAllBlogCategories();
  if (!categories) {
    return {
      props: {},
      notFound: true,
    };
  }
  return (
    <>
      <h2 className="mt-6 text-3xl font-display xl:text-6xl">
        Blog Categories
      </h2>
      <div className="container px-4 mx-auto my-6 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {categories.map((category: any, index: number) => (
            <BlogCategoryCard
              key={index}
              slug={category.slug}
              name={category.name}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

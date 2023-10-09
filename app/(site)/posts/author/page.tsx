import { getAllAuthors } from "@/services/author/get-author";
import { AuthorCard } from "@/components/authors/author-card";

export default async function BlogAuthorsPage({ params }: any) {
  const { authors } = await getAllAuthors();
  if (!authors) {
    return {
      props: {},
      notFound: true,
    };
  }
  return (
    <>
      <h2 className="mt-6 text-3xl font-display xl:text-6xl">Blog Authors</h2>
      <div className="container px-4 mx-auto my-6 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {authors.map((author: any, index: number) => (
            <AuthorCard
              key={index}
              slug={author.slug}
              name={author.name}
              description={author.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

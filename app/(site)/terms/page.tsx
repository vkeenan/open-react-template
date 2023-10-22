import styles from "@/app/css/post-body.module.css";
import Link from "next/link";
import { CoverImage, PostTitle, PostMetadata } from "@/components/posts";
import { getJsonSchema } from "@/services/site/get-json-schema";

import { getPageByUri } from "@/services/page/get-page-by-uri";

export default async function TermsPage() {
  const pageResult = await getPageByUri("/terms/");
  if (!pageResult) {
    return {
      props: {},
      notFound: true,
    };
  }
  if (pageResult == undefined) {
    return {
      props: {},
      notFound: true,
    };
  }
  const jsonSchema = getJsonSchema(pageResult);
  const {
    author,
    categories,
    content,
    date,
    featuredImage,
    isSticky,
    relatedPostsList,
    relatedPostsTitle,
    title,
  }: any = pageResult.page;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonSchema) }}
      />
      <section>
        <div className="content-center py-3 mx-auto mb-2 w-90 shadow-brand-900 drop-shadow-2xl">
          <CoverImage coverImage={featuredImage} />
        </div>
        <div className="flex flex-col w-full items-fill">
          <div className="mb-4 ml-2 mr-1 bg-white shadow-lg">
            <div className="lg:mx-20">
              <PostTitle>{title}</PostTitle>
              <div className="text-center align-middle">
                <PostMetadata
                  date={date}
                  author={author}
                  categories={categories}
                  isSticky={isSticky}
                />
              </div>
              <div className="content">
                <div className="w-full mx-2 lg:pr-10 lg:mx-5">
                  <div className="container px-4 mx-auto md:px-0">
                    <div
                      className={styles.content}
                      dangerouslySetInnerHTML={{
                        __html: content,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full p-2 m-3 text-center">
                <div className="container">
                  <p className="mb-3 font-bold text-gray-400">
                    {/* Last updated on {formatDate(modified)}. */}
                  </p>
                  {Array.isArray(relatedPostsList) &&
                    relatedPostsList.length > 0 && (
                      <div className={styles.relatedPosts}>
                        {relatedPostsTitle.name ? (
                          <span>
                            More from{" "}
                            <Link href={relatedPostsTitle.link}>
                              {relatedPostsTitle.name}
                            </Link>
                          </span>
                        ) : (
                          <span>More Posts</span>
                        )}
                        <ul>
                          {relatedPostsList.map((relatedPost: any) => (
                            <li key={relatedPost.title}>
                              <Link href={"/posts/" + relatedPost.slug}>
                                {relatedPost.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

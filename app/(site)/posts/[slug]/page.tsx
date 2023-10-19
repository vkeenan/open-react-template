import Link from "next/link";
import { JSDOM } from "jsdom";
import { Metadata } from "@/types/metadata";
import styles from "@/app/css/post-body.module.css";
import { formatDate } from "@/lib/datetime";
import {
  CoverImage,
  PostTitle,
  PostMetadata,
  SocialShare,
} from "@/components/posts";
import {
  categoryPathBySlug,
  getPostBySlug,
  getRelatedPosts,
  postPathBySlug,
  getAllPosts,
} from "@/services/post";
import { getJsonSchema, getSiteMetadata } from "@/services/site";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const { posts: data } = await getAllPosts();
  if (data) {
    return data.map((item: any) => ({
      slug: item.slug,
    }));
  } else {
    return [];
  }
}

export async function generateMetadata({ params }: any) {
  const { post }: any = await getPostBySlug(params?.slug);
  if (!post) {
    return {};
  }
  const siteSettings = await getSiteMetadata();
  const title = post.metaTitle || `${post.title} - ${siteSettings.title}`;
  const postDescription =
    post.openAiDescription || post.metaDescription || post.excerpt;
  const image = post.og?.image?.sourceUrl || post.featuredImage?.sourceUrl;
  const altText = post.og?.image?.altText || post.featuredImage?.altText;
  const keywords = post.openAiKeywords ? post.openAiKeywords.split(",") : [];

  // Use SEO metadata if available, otherwise fall back to the original data
  const theMetadata: Metadata = {
    title: post.metaTitle || `${post.title} - ${siteSettings.title}`,
    keywords: post.metaKeywords || keywords,
    description: postDescription,
    openGraph: {
      title: post.og.title || title,
      description: postDescription,
      type: post.og.type,
      url: `${siteSettings.siteUrl}/${post.slug}`,
      images: [
        {
          url: image,
          alt: altText,
          width: post.og.image?.mediaDetails?.width,
          height: post.og.image?.mediaDetails?.height,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@salesforcedevop",
      title: post.twitter.title || title,
      description: postDescription,
      images: [
        {
          url: image,
          alt: altText,
        },
      ],
    },
  };

  return theMetadata;
}

export default async function RenderPostPage({ params }: any) {
  const { post }: any = await getPostBySlug(params?.slug);

  if (!post) {
    return {
      props: {},
      notFound: true,
    };
  }

  const siteSettings = await getSiteMetadata();
  const jsonSchema = getJsonSchema(post, siteSettings);
  const { categories, databaseId: postId } = post;

  const props = {
    post,
    socialImage: `${process.env.OG_IMAGE_DIRECTORY}/${params?.slug}.png`,
  };

  const { category: relatedCategory, posts: relatedPosts } =
    (await getRelatedPosts(categories, postId)) || {};
  const hasRelated =
    relatedCategory && Array.isArray(relatedPosts) && relatedPosts.length;

  if (hasRelated) {
    (props as any).related = {
      posts: relatedPosts,
      title: {
        name: relatedCategory.name || null,
        link: categoryPathBySlug(relatedCategory.slug),
      },
    };
  }

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonSchema) }}
      />
      <div className="content-center py-3 mx-auto mb-2 w-90 shadow-brand-900 drop-shadow-2xl">
        <CoverImage coverImage={post.featuredImage} />
      </div>
      <div className="flex flex-col w-full items-fill">
        <div className="mb-4 ml-2 mr-1 bg-white shadow-lg">
          <div className="lg:mx-20">
            <PostTitle>{post.title}</PostTitle>
            <div className="text-center align-middle">
              <PostMetadata
                date={post.date}
                author={post.author}
                categories={categories}
                isSticky={post.isSticky}
              />
            </div>
            <SocialShare
              title={post.title}
              url={siteSettings.siteUrl + post.slug}
            />
            <div className="content">
              <div className="w-full mx-2 lg:pr-10 lg:mx-5">
                <div className="container px-4 mx-auto md:px-0">
                  <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{
                      __html: post.content,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full p-2 m-3 text-center">
              <div className="container">
                <p className="mb-3 font-bold text-gray-400">
                  Last updated on {formatDate(post.modified)}.
                </p>
                {Array.isArray(post.relatedPostsList) &&
                  post.relatedPostsList.length > 0 && (
                    <div className={styles.relatedPosts}>
                      {post.relatedPostsTitle.name ? (
                        <span>
                          More from{" "}
                          <Link href={post.relatedPostsTitle.link}>
                            {post.relatedPostsTitle.name}
                          </Link>
                        </span>
                      ) : (
                        <span>More Posts</span>
                      )}
                      <ul>
                        {post.relatedPostsList.map((relatedPost: any) => (
                          <li key={relatedPost.title}>
                            <Link href={postPathBySlug(relatedPost.slug)}>
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
  );
}

async function fixToc(rawHtml: string, slug: string): Promise<string> {
  // Get site settings
  const siteSettings = await getSiteMetadata();

  // Create a DOM from the raw HTML
  const dom = new JSDOM(rawHtml);
  const document = dom.window.document;

  // Get all anchor elements in the document
  const anchors = document.querySelectorAll("a");

  // Iterate over each anchor and fix the href
  anchors.forEach(
    (anchor: {
      getAttribute: (arg0: string) => any;
      setAttribute: (arg0: string, arg1: string) => void;
    }) => {
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#")) {
        // Construct new URL
        const newUrl = `${siteSettings.siteUrl}/posts/${slug}${href}`;
        // Set new URL
        anchor.setAttribute("href", newUrl);
      }
    }
  );

  // Return the modified HTML
  return document.documentElement.outerHTML;
}

import Link from "next/link";

import { getPageBySlug } from "@/services/page/get-page-by-slug";
import { getSiteMetadata } from "@/services/site/get-site-metadata";

export default async function ContactPage() {
  const page = await getPageBySlug("contact");
  if (!page) {
    return {
      props: {},
      notFound: true,
    };
  }
  const { title, metaTitle, description, slug, content, children }: any = page;

  // const { metadata } = usePageMetadata({
  //   metadata: {
  //     ...page,
  //     title: metaTitle,
  //     description:
  //       description || page.og?.description || `Read more about ${title}`,
  //   },
  // });

  // (metadata as any).title = `${title} - ${siteMetadata.title}`;
  // (metadata as any).og.title = (metadata as any).title;
  // (metadata as any).twitter.title = (metadata as any).title;

  // const hasChildren = Array.isArray(children) && children.length > 0;

  return (
    <>
      <div className="container px-5 mx-auto">
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>

      {children && (
        <div className="container px-5 mx-auto">
          <aside>
            <p>
              <strong>{title}</strong>
            </p>
            <ul>
              {children.map((child: any) => {
                return (
                  <li key={child.id}>
                    <Link href={child.uri}>{child.title}</Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      )}
    </>
  );
}

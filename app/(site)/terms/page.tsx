import Link from "next/link";
import styles from "@/app/css/post-body.module.css";

import { getPageByUri } from "@/services/page/get-page-by-uri";
import { getSiteMetadata } from "@/services/site/get-site-metadata";

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
  const { title, metaTitle, description, slug, content, children }: any =
    pageResult.page;

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
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}

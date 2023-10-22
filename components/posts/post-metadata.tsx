import Link from "next/link";
import { FaMapPin, FaRegClock, FaRegFolder } from "react-icons/fa";

import { formatDate } from "@/lib/datetime";

import { authorPathByName } from "@/services/author/get-author";
import { categoryPathBySlug } from "@/services/post/get-blog-category";

interface PostMetadataProps {
  author: any;
  date: string;
  categories: any[];
  isSticky?: boolean;
}

export const PostMetadata = ({
  author,
  date,
  categories,
  isSticky = false,
}: PostMetadataProps) => {
  return (
    <div className="flex flex-row items-center mx-3 text-sm md:content-evenly md:text-base">
      {date && (
        <div className="mx-2">
          <span className="inline-block mr-1">
            <FaRegClock />
          </span>
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
      )}
      {author && (
        <div className="mx-2">
          <address>
            By{" "}
            <Link href={"/posts/author/" + author.slug} rel="author">
              {author.name}
            </Link>
          </address>
        </div>
      )}
      {Array.isArray(categories) && categories[0] && (
        <div className="mx-2">
          {categories.map((category) => {
            return (
              <div key={category.slug}>
                <Link href={categoryPathBySlug(category.slug)}>
                  <span className="inline-block mt-1 mr-1">
                    <FaRegFolder />
                  </span>
                  {category.name}
                </Link>
              </div>
            );
          })}
        </div>
      )}
      {isSticky && (
        <li>
          <FaMapPin aria-label="Sticky Post" />
        </li>
      )}
    </div>
  );
};

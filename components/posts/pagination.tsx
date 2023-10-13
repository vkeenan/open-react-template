import Link from "next/link";
import {
  BiSkipNextCircle as NextIcon,
  BiSkipPreviousCircle as PreviousIcon,
} from "react-icons/bi";
import { TbDots as Dots } from "react-icons/tb";

import config from "../../package.json";

const MAX_NUM_PAGES = 9;

const { homepage = "" } = config;

interface PaginationProps {
  pagesCount: any;
  currentPage: any;
  basePath: any;
  addCanonical?: boolean;
}

export const Pagination = ({
  pagesCount,
  currentPage,
  basePath,
  addCanonical = true,
}: PaginationProps) => {
  const path = `${basePath}/page/`;

  const hasPreviousPage = pagesCount > 1 && currentPage > 1;
  const hasNextPage = pagesCount > 1 && currentPage < pagesCount;

  let hasPrevDots = false;
  let hasNextDots = false;

  function getPages() {
    let pages = pagesCount;
    let start = 0;
    // If the number of pages exceeds the max
    if (pagesCount > MAX_NUM_PAGES) {
      // Set number of pages to the max
      pages = MAX_NUM_PAGES;
      const half = Math.ceil(MAX_NUM_PAGES / 2);
      const isHead = currentPage <= half;
      const isTail = currentPage > pagesCount - half;
      hasNextDots = !isTail;
      // If the current page is at the head, the start variable remains 0
      if (!isHead) {
        hasPrevDots = true;
        // If the current page is at the tail, the start variable is set to
        // the last chunk. Otherwise the start variable will place the current
        // page at the middle
        start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
      }
    }
    return [...new Array(pages)].map((_, i) => i + 1 + start);
  }

  const pages = getPages();

  return (
    <>
      {/* <Head>
        {addCanonical && !hasPreviousPage && (
          <link rel='canonical' href={`${homepage}${basePath}`} />
        )}
        {hasPreviousPage && (
          <link rel='prev' href={`${homepage}${path}${currentPage - 1}`} />
        )}
        {hasNextPage && (
          <link rel='next' href={`${homepage}${path}${currentPage + 1}`} />
        )}
      </Head> */}

      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-brand-100 font-display sm:px-6">
        {hasPreviousPage && (
          <Link
            href={`${path}${currentPage - 1}`}
            className="relative inline-flex items-center justify-center px-2 py-2 text-sm font-medium align-middle bg-white border border-gray-300 rounded-r-md text-cocoa_brown-900 hover:bg-gray-50"
            aria-label="Goto Previous Page"
          >
            <PreviousIcon />
          </Link>
        )}
        <nav
          className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
          role="navigation"
          aria-label="Pagination Navigation"
        >
          <ul className="flex flex-row">
            {hasPrevDots && (
              <li className="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-300 text-cocoa_brown-900 hover:bg-gray-50">
                <Dots
                  aria-label={`Navigation to pages 1-${pages[0] - 1} hidden`}
                />
              </li>
            )}
            {pages.map((page) => {
              const active = page === currentPage;
              return active ? (
                <li
                  key={page}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
                >
                  <span
                    aria-label={`Current Page, Page ${page}`}
                    aria-current="true"
                  >
                    {page}
                  </span>
                </li>
              ) : (
                <li
                  key={page}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-300 text-cocoa_brown-900 hover:bg-gray-50"
                >
                  <Link
                    href={`${path}${page}`}
                    aria-label={`Goto Page ${page}`}
                  >
                    <span>{page}</span>
                  </Link>
                </li>
              );
            })}
            {hasNextDots && (
              <li className="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-300 text-cocoa_brown-900 hover:bg-gray-50">
                <Dots
                  aria-label={`Navigation to pages ${
                    pages[pages.length - 1] + 1
                  }-${pagesCount} hidden`}
                />
              </li>
            )}
          </ul>
        </nav>
        {hasNextPage && (
          <Link
            href={`${path}${currentPage + 1}`}
            aria-label="Goto Next Page"
            className="relative inline-flex items-center justify-center px-2 py-2 text-sm font-medium align-middle bg-white border border-gray-300 rounded-r-md text-cocoa_brown-900 hover:bg-gray-50"
          >
            <NextIcon />
          </Link>
        )}
      </div>
    </>
  );
};

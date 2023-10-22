"use client";

import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-hooks-web";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "local-typesense-api-key", // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: "search.noc.tnxs.net",
        port: 8108,
        protocol: "http",
      },
    ],
    // cacheSearchResultsForSeconds: 0, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    query_by: "post_title,post_content",
  },
});

export function SearchModal({ isOpen, setIsOpen }: any) {
  function hit({ hit }: any) {
    const slug = permalinkToSlug({ permalink: hit.permalink });
    return (
      <Link
        className="flex flex-col truncate border-b border-brand-100 text-brand-900 hover:bg-brand-900 hover:text-white"
        href={`/posts/${slug}`}
        onClick={() => setIsOpen(false)}
      >
        {hit.post_title}
      </Link>
    );
  }
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="w-5/6 p-4 m-4 mx-auto bg-brand-100 md:w-3/4 xl:w-7/12 3xl:w-1/2">
          <Dialog.Title>
            <div className="flex flex-col items-center justify-center mb-2 text-2xl font-display">
              Search SalesforceDevops.net
            </div>
          </Dialog.Title>
          <InstantSearch
            indexName="post"
            searchClient={typesenseInstantsearchAdapter.searchClient}
          >
            <SearchBox className="flex flex-col items-center justify-center w-full p-2 mb-4" />
            <Hits hitComponent={hit} />
          </InstantSearch>
          <button
            className="px-2 py-1 mx-2 mt-8 border border-black border-solid rounded"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

function permalinkToSlug({ permalink }: any): string {
  const arr = permalink.slice(0, -1).split("/") || [];
  if (arr.length > 0) {
    return arr[arr.length - 1];
  }
  return "";
}

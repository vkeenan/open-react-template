import { getApolloClient } from "@/lib/apollo-client";
import { QUERY_ALL_PAGES } from "@/data/pages";

export async function getAllPages() {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: QUERY_ALL_PAGES,
  });
  const pages = data.pages.edges.map(({ node = {} }) => node);
  return pages;
}


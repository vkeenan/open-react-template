import 'server-only';
import { getApolloClient } from '@/lib/apollo-client';
import { QUERY_ALL_USERS, QUERY_USER_BY_SLUG } from '@/data/users'
import { logger } from '@/lib/logger';

export async function getAllAuthors() {
  logger.debug(`👉getAllAuthors`);
  const client = getApolloClient();
  const { data } = await client.query({
    query: QUERY_ALL_USERS,
  });
  const _authors = data.users.edges.map((edge: { node: any; }) => edge.node);
  logger.debug(`👈getAllAuthors: ${_authors.length}`);
  return { authors: _authors };
}

export async function getAuthorBySlug(slug: string) {
  logger.debug(`👉getAuthorBySlug: ${slug}`);
  const client = getApolloClient();
  const { data } = await client.query({
    query: QUERY_USER_BY_SLUG,
    variables: {
      slug,
    },
  });
  const _author = data.user;
  logger.debug(`👈getAuthorBySlug: ${_author?.name}`);
  return { author: _author };
}

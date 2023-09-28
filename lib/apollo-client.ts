import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let client: ApolloClient<any> | null = null;

export function getApolloClient(): ApolloClient<any> {
  if (!client) {
    try {
      client = _createApolloClient();
    } catch (error) {
      console.error("Failed to create Apollo Client", error);
      throw error;
    }
  }
  return client;
}

function _createApolloClient(): ApolloClient<any> {
  const graphqlEndpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;

  if (!graphqlEndpoint) {
    throw new Error("Environment variable NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT is not defined");
  }

  return new ApolloClient({
    link: new HttpLink({
      uri: graphqlEndpoint,
    }),
    cache: new InMemoryCache({
      typePolicies: {
        RootQuery: {
          queryType: true,
        },
        RootMutation: {
          mutationType: true,
        },
      },
    }),
  });
}

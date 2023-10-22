const {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
} = require('@apollo/client');
const WORDPRESS_GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;

const QUERY_ALL_CATEGORIES = gql`
  query AllCategories {
    categories(first: 10000) {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`;

const QUERY_ALL_PAGES = gql`
  query GetAllPages {
    pages(first: 10000) {
      edges {
        node {
          id
          slug
          uri
        }
      }
    }
  }
`;

const QUERY_ALL_POSTS = gql`
  query AllPosts {
    posts(first: 10000) {
      edges {
        node {
          slug
          uri
          date
        }
      }
    }
  }
`;

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: WORDPRESS_GRAPHQL_ENDPOINT,
    }),
    cache: new InMemoryCache(),
  });
}

export async function getAllPages() {
  const apolloClient = createApolloClient();
  const { data } = await apolloClient.query({
    query: QUERY_ALL_PAGES,
  });
  const pages = data.pages.edges.map(({ node = {} }) => node);
  return pages;
}

export async function getAllPosts() {
  const apolloClient = createApolloClient();
  const { data } = await apolloClient.query({
    query: QUERY_ALL_POSTS,
  });
  const posts = data.posts.edges.map(({ node = {} }) => node);
  return posts;
}

export async function getAllBlogCategories() {
  const apolloClient = createApolloClient();
  const data = await apolloClient.query({
    query: QUERY_ALL_CATEGORIES,
  });
  const categories = data?.data.categories.edges.map(({ node = {} }) => node);
  return categories;
}

const URL = 'https://workdifferentwithai.com';

function generateSiteMap(posts, pages, categories) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
                <loc>${URL}${page.uri}</loc>
            </url>
          `;
        })
        .join('')}
      ${posts
        .map((post) => {
          return `
            <url>
                <loc>${URL}${post.uri}</loc>
            </url>
          `;
        })
        .join('')}
      ${categories
        .map((category) => {
          return `
            <url>
                <loc>${URL}/posts/category/${category.slug}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;
}

export async function GET() {
  const posts = await getAllPosts();
  const pages = await getAllPages();
  const categories = await getAllBlogCategories();
  const body = generateSiteMap(posts, pages, categories);

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}

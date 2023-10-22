// sitemap.xml/route.js

import { navItems } from "@/data/nav";
import { getAllTracks } from "@/services/track/get-track";
import { getAllCourses } from "@/services/course/get-course";
import { getAllEvents } from "@/services/event/get-event";

const {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
} = require("@apollo/client");
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

const URL = "https://workdifferentwithai.com";

function generateSiteMap(
  posts,
  categories,
  navItemsUrls,
  events,
  courses,
  tracks
) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${posts
        .map((post) => {
          return `
            <url>
                <loc>${URL}${post.uri}</loc>
            </url>
          `;
        })
        .join("")}
      ${categories
        .map((category) => {
          return `
            <url>
                <loc>${URL}/posts/category/${category.slug}</loc>
            </url>
          `;
        })
        .join("")}
      ${navItemsUrls
        .map((item) => {
          return `
            <url>
                <loc>${URL}${item.uri}</loc>
            </url>
          `;
        })
        .join("")}
        ${
          events.length > 0
            ? events
                .map((event) => {
                  return `
              <url>
                  <loc>${URL}/events/${event.Slug}</loc>
              </url>
            `;
                })
                .join("")
            : ""
        }
        ${courses
          .map((course) => {
            return `
            <url>
                <loc>${URL}/courses/${course.Slug}</loc>
            </url>
          `;
          })
          .join("")}
      ${tracks
        .map((track) => {
          return `
            <url>
                <loc>${URL}/tracks/${track.Slug}</loc>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;
}

function getNavItemsUrls(navItems) {
  const urls = [];
  navItems.forEach((item) => {
    if (item.sitemap) {
      urls.push({
        uri: item.href,
      });
    }
    if (item.sub) {
      item.sub.forEach((subItem) => {
        if (subItem.sitemap) {
          urls.push({
            uri: subItem.href,
          });
        }
      });
    }
  });
  return urls;
}

export async function GET() {
  const posts = await getAllPosts();
  const categories = await getAllBlogCategories();
  const navItemsUrls = getNavItemsUrls(navItems);
  const events = await getAllEvents();
  const courses = await getAllCourses();
  const tracks = await getAllTracks();
  const body = generateSiteMap(
    posts,
    categories,
    navItemsUrls,
    events,
    courses,
    tracks
  );

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}

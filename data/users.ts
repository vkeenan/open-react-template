import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
  query AllUsers {
    users(first: 10000) {
      edges {
        node {
          avatar {
            height
            width
            url
          }
          description
          id
          name
          roles {
            nodes {
              name
            }
          }
          slug
        }
      }
    }
  }
`;

export const QUERY_USER_BY_SLUG = gql`
  query GetUserBySlug($slug: ID!) {
    user(id: $slug, idType: SLUG) {
      avatar {
        height
        width
        url
      }
      description
      id
      name
      roles {
        nodes {
          name
        }
      }
      slug
      seo {
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        title
        social {
          youTube
          wikipedia
          twitter
          soundCloud
          pinterest
          mySpace
          linkedIn
          instagram
          facebook
        }
      }
    }
  }
`;
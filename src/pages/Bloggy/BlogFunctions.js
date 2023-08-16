import { request, gql } from 'graphql-request';

const endpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT_URL;

export const getPosts = async () => {
  const query = gql`
    query getPosts {
      postsConnection {
        edges {
          node {
            author {
              name
              photo {
                url
              }
            }
            categories {
              categoryName
              slug
            }
            createdAt
            preview
            title
            slug
          }
        }
      }
    }`

  const result = await request(endpoint, query);
  console.log(result);
  return result.postsConnection.edges;
}

export const getPostDetail = async slug => {
  const query = gql`
    query getPostDetail ($slug: String!) {
      post(where: {slug: $slug}) {
        author {
          name
          photo {
            url
          }
          posts {
            title
            slug
            createdAt
          }
        }
        categories {
          slug
          posts {
            author {
              name
              photo {
                id
              }
            }
            slug
            title
            preview
            createdAt
            categories {
              slug
            }
          }
        }
        content {
          html
          raw
        }
        createdAt
        slug
        title
      }
    }  
  `

  const result = await request(endpoint, query, {slug});
  return result.post
}
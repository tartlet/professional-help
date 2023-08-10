import { request, gql } from 'graphql-request';

const endpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT_URL;

const getPosts = async () => {
  console.log("meow");
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
            }
            createdAt
            preview
            title
          }
        }
      }
    }`

  const result = await request(endpoint, query);
  console.log(result);
  return result.postsConnection.edges;
}

export default getPosts;
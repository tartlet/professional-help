import { request, gql } from 'graphql-request';

const endpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT_URL_PROJECTS;

export const getProjects = async() => {
  const query = gql`
    query getProjects {
      projectsConnection {
        edges {
          node {
            blurb
            endDate
            startDate
            title
            projectDescription {
              html
            }
            categories {
              name
            }
            cardImage {
              url
            }
            order
            linktoProject
          }
        }
      }
    }
  `
  const result = await request(endpoint, query);
  console.log(result);
  var post_array = result.projectsConnection.edges;
  post_array.sort(function(a,b) {
    return new  Date(a.node.order) - new Date(b.node.order)
  })
  return post_array;
}
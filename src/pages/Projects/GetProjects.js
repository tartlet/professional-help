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
          }
        }
      }
    }
  `
  const result = await request(endpoint, query);
  console.log(result);
  return result.projectsConnection.edges;
}
export const listMovies = /* GraphQL */ `
  query ListMovies {
    listMovies {
      items {
        id
        title
        poster
        categories {
          items {
            categoryID
          }
        }
      }
    }
  }
`;

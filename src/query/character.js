import { gql } from '@apollo/client';

export const GET_CHARACTERS = (input) => gql`
query {
    characters(page: 1, filter: { name: "${input}" }) {
      info {
        count
      }
      results {
        name,
        id,
        image
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;
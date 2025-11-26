import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";

function ALL_USERS() {
  const { loading, error, data } = useQuery(gql`
    query ALL_USERS {
      users {
        id
        name
        age
        email
        nationality
      }
    }
  `);
  return { loading, error, data };
}

export { ALL_USERS };

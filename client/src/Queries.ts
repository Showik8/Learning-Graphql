import { gql } from "@apollo/client";

export type User = {
  id: string;
  name: string;
  age: number;
  email: string;
  nationality: string;
};

export const ALL_USERS = gql`
  query ALL_USERS {
    users {
      id
      name
      age
      email
      nationality
    }
  }
`;

export const SPECIAL_USERS = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      age
      email
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      id
      name
      age
      email
      nationality
    }
  }
`;

import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    isActive: Boolean!
    nationality: String
    friends: [User!]
    posts: [Post!]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    hello: String
    goodBye: String
    users: [User!]!
    getUser(id: ID!): User!
  }
`;

export default typeDefs;

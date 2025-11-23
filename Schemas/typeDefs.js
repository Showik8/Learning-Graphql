import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String
    goodBye: String
  }
`;

export default typeDefs;

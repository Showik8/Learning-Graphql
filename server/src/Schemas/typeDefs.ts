import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String!
    age: Int
    isActive: Boolean!
    nationality: String
    friends: [User!]
    friendsRequest: [User!]
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
    getUser(_id: ID!): User!
  }

  input UserInput {
    name: String!
    email: String!
    age: Int!
    nationality: String
    isActive: Boolean!
    friends: [UserInput!]
    posts: [PostInput!]
  }
  input PostInput {
    title: String!
    content: String!
  }

  type Mutation {
    createUser(input: UserInput!): User!
    updateUser(id: ID!, input: UserInput!): User!
    deleteUser(id: ID!): String!
    addFriend(userId: ID!, friendId: ID!): User!
    removeFriend(userId: ID!, friendId: ID!): User!
    acceptFriendRequest(userId: ID!, friendId: ID!): User!
    declineFriendRequest(userId: ID!, friendId: ID!): User!
  }
`;

export default typeDefs;

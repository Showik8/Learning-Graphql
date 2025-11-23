import { ApolloServer } from "apollo-server";
import typeDefs from "./Schemas/typeDefs.js";
import resolvers from "./Schemas/resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

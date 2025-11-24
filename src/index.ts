import { ApolloServer } from "apollo-server";
import typeDefs from "./Schemas/typeDefs";
import resolvers from "./Schemas/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

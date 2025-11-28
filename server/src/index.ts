import { ApolloServer } from "apollo-server";
import typeDefs from "./Schemas/typeDefs";
import resolvers from "./Schemas/resolvers";
import dotenv from "dotenv";
import { connectDB } from "./db/db";

dotenv.config();
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

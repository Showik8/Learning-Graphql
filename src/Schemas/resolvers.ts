import Users from "../FakeData";
import type { User } from "../FakeData";

const resolvers = {
  Query: {
    hello: (): string => "Hello, world!",
    goodBye: (): string => "Goodbye, world!",
    users: () => Users,
    getUser: (_: any, args: { id: string }): User | undefined => {
      return Users.find((user) => user.id === args.id);
    },
  },
};

export default resolvers;

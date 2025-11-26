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
  Mutation: {
    createUser: (_: any, args: any) => {
      const newUser = {
        id: String(Users.length + 1),
        ...args.input,
      };
      Users.push(newUser);
      return newUser;
    },
    updateUser: (_: any, args: any) => {
      const userId = args.id;
      const userIndex = Users.findIndex((user) => user.id === userId);

      const updatedUser = {
        ...Users[userIndex],
        ...args.input,
      };

      console.log(updatedUser);

      Users[userIndex] = updatedUser;

      return updatedUser;
    },
    deleteUser: (_: any, args: any) => {
      const userID = args.id;
      const userIndex = Users.findIndex((user) => user.id === userID);

      const updatred = Users.splice(userIndex, 1);
      console.log(updatred);

      return `User with ID ${userID} has been deleted.`;
    },
  },
};

export default resolvers;

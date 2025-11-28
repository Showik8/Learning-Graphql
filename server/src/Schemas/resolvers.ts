import {
  getUser,
  updateUser,
  getAllUsers,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} from "../controllers/UserController";

export interface User {
  _id: string;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  nationality: string;
  friends?: User[];
}

const resolvers = {
  Query: {
    hello: (): string => "Hello, world!",
    goodBye: (): string => "Goodbye, world!",
    users: async () => await getAllUsers(),
    getUser: async (_: any, args: { _id: string }) => {
      return await getUser(args._id);
    },
  },
  Mutation: {
    createUser: (_: any, args: any) => {
      return createUser(args.input);
    },
    updateUser: (_: any, args: any) => {
      return updateUser(args._id, args.input);
    },
    deleteUser: (_: any, args: any) => {
      return deleteUser(args.id);
    },
    addFriend(_: any, args: any) {
      return addFriend(args.userId, args.friendId);
    },
    removeFriend(_: any, args: any) {
      return removeFriend(args.userId, args.friendId);
    },
  },
};

export default resolvers;

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  nationality: string;
  friends?: User[];
  posts?: Post[];
}

type Post = {
  id: string;
  title: string;
  content: string;
};

const Users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
    isActive: true,
    nationality: "American",
    friends: [
      {
        id: "2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        age: 32,
        isActive: false,
        nationality: "Canadian",
      },
    ],
    posts: [],
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 32,
    isActive: false,
    nationality: "Canadian",
    friends: [
      {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
        age: 28,
        isActive: true,
        nationality: "American",
      },
    ],
    posts: [],
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 24,
    isActive: true,
    nationality: "British",
  },
  {
    id: "4",
    name: "Bob Brown",
    email: "bob.brown@example.com",
    age: 29,
    isActive: false,
    nationality: "Australian",
  },
  {
    id: "5",
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    age: 35,
    isActive: true,
    nationality: "American",
  },
];

export default Users;

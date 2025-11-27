import { ALL_USERS } from "./Queries";
import type { User } from "./Queries";
import { useQuery } from "@apollo/client/react";

const AllUser = () => {
  const { loading, error, data } = useQuery<{ users: User[] }>(ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {data &&
        data.users.map((user: User) => (
          <div key={user.id} className="mb-4 p-4 border rounded">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Nationality:</strong> {user.nationality}
            </p>
          </div>
        ))}
    </div>
  );
};

export default AllUser;

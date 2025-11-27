import React from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_USER } from "./Queries";

const CreateUser = () => {
  const [user, setUser] = React.useState({
    name: "",
    age: 0,
    email: "",
    nationality: "",
  });

  const [createUser] = useMutation(CREATE_USER);

  function handleCreateUser() {
    createUser({
      variables: {
        input: {
          name: user.name,
          age: Number(user.age),
          email: user.email,
          nationality: user.nationality,
        },
      },
    });
  }

  return (
    <div className="p-6 border rounded flex flex-col gap-4">
      <form className=" flex flex-col gap-5">
        <input
          className="p-2 border rounded"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          placeholder="Name"
        />
        <input
          className="p-2 border rounded"
          onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
          type="number"
          placeholder="Age"
        />
        <input
          className="p-2 border rounded"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="email"
          placeholder="Email"
        />
        <input
          className="p-2 border rounded"
          onChange={(e) => setUser({ ...user, nationality: e.target.value })}
          type="text"
          placeholder="Nationality"
        />
      </form>

      <button
        className="p-4 border-2 bg-green-500 rounded-2xl"
        onClick={handleCreateUser}
      >
        Create User
      </button>
    </div>
  );
};

export default CreateUser;

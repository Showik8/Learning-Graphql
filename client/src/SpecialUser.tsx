import { useState } from "react";
import { useLazyQuery } from "../node_modules/@apollo/client/react/index.js";
import { SPECIAL_USERS, type User } from "./Queries";

const SpecialUser = () => {
  const [name, setName] = useState("");

  const [getUserById, { data, loading, error }] = useLazyQuery<{
    getUser: User;
  }>(SPECIAL_USERS);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    getUserById({ variables: { id: name } });
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />

      <button onClick={handleClick}>Fetch User</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data && <pre>{JSON.stringify(data.getUser, null, 2)}</pre>}
    </div>
  );
};

export default SpecialUser;

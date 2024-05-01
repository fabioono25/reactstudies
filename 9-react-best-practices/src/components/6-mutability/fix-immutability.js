import React from "react";

const FixImmutable = () => {
  const [users, setUsers] = React.useState([]);

  const addUser = (newUser) => {
    // now we fix the immutability issue by creating a new array and adding the new user to it.
    setUsers([...users, newUser]);

    // another alternative
    // setUsers((prevUsers) => [...prevUsers, newUser]);

    // we can use concat method as well
    // setUsers(users.concat(newUser));
  };

  return (
    <div>
      <div>Users: </div>
      <button onClick={() => addUser("John")}>Add user</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user} - {index}</li>
        ))}
      </ul>
    </div>
  );
};

export default FixImmutable;

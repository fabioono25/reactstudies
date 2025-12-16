import React from "react";

const ErrorImmutable = () => {
  const [users, setUsers] = React.useState([]);

  const addUser = (newUser) => {
    // this code doesn't make the component re-render.
    // why? because we are mutating the state directly. React doesn't know that the state has changed.
    users.push(newUser); // push method performs a mutation (not allowed in React)
    setUsers(users);
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

export default ErrorImmutable;

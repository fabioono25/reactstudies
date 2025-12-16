import { useEffect, useState } from "react";

const fetchTodos = async (userId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
  return response.json();
};

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const userId = 1;
  console.log('outside useEffect');

  useEffect(() => {
    let ignore = false;
    console.log('inside useEffect');

    async function startFetching() {
      console.log('inside startFetching');
      const json = await fetchTodos(userId);
      if (!ignore) {
        setTodos(json);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [userId]);
  return <h1>TODOS: {JSON.stringify(todos)}</h1>;
}

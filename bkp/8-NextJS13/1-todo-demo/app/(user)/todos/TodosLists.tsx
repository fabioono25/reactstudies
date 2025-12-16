import { Todo } from "@/typings";
import Link from "next/link";
import React from "react";

const fetchTodos = async () => {

  //timeout for random number of seconds between 1 and 5
  const timeout = Math.floor(Math.random() * 5) + 1;
  await new Promise(resolve => setTimeout(resolve, timeout * 1000));

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id} - {todo.title}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;

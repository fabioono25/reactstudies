import { Todo } from "@/typings";
import React from "react";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo: Todo = await fetchTodo(todoId);

  return (
    <div className="p-10 bg-gray-500 border-2 m-2 shadow-lg">
      <p>
        #{todo.id} - {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;

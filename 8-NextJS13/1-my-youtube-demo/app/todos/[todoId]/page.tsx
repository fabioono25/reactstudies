import { Todo } from "@/typings";
import React from "react";
import { notFound } from 'next/navigation';
// try to server side render this page
export const dynamicParams = true;

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo: Todo = await fetchTodo(todoId);

  if (!todo.id) return notFound();

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

export async function generateStaticParams() {
  // fetching all possible todos
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  // avoiding rate limited in 10
  const trimmedTodos = todos.slice(0, 10);

  return todos.map((todo) => ({
    todoId: todo.id.toString(),
    title: todo.title,
  }));
}

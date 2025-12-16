import { databases } from "@/appwrite";

export const getTasksGroupedByColumn = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TASKS_COLLECTION_ID!
  );

  const tasks = data.documents;

  const columns = tasks.reduce((accumulator, task) => {
    if (!accumulator.get(task.status)) {
      accumulator.set(task.status, {
        id: task.status,
        tasks: [],
      });
    }

    accumulator.get(task.status)!.tasks.push({
      $id: task.$id,
      $createdAt: task.$createdAt,
      title: task.title,
      status: task.status,
      ...(task.image && { image: JSON.parse(task.image) }), // if there is an image, we append the result
    });

    return accumulator;
  }, new Map<TypedColumn, Column>());

  const columnTypes: TypedColumn[] = ["todo", "in-progress", "done"];

  columnTypes.forEach((columnType) => {
    if (!columns.get(columnType)) {
      columns.set(columnType, {
        id: columnType,
        tasks: [],
      });
    }
  });

  // sort columns by columnTypes
  const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    )
  );

  const board: Board = {
    columns: sortedColumns,
  };

  return board;
};

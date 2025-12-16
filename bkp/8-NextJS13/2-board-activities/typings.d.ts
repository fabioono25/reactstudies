interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "in-progress" | "done";

interface Column {
  id: TypedColumn;
  tasks: Task[];
}

// interface Task extends Models.Document {
interface Task {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: string;
}

interface Image {
  buckedId: string;
  fileId: string;
}

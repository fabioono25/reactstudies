import { PlusCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

type Props = {
  id: TypedColumn;
  tasks: Task[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: "To Do",
  "in-progress": "In Progress",
  done: "Done",
};

function Column({ id, tasks, index }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provider) => (
        <div
          {...provider.draggableProps}
          {...provider.dragHandleProps}
          ref={provider.innerRef}
        >
          {/* render droppable section for tasks in the column */}
          <Droppable droppableId={index.toString()} type="card">
            {(provider, snapshot) => (
              <div
                {...provider.droppableProps}
                ref={provider.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
              >
                <h2 className="flex justify-between font-bold text-xl pb-2">
                  {idToColumnText[id]}
                  <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm font-normal">
                    {tasks.length}
                  </span>
                </h2>
                <div className="space-y-2">
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task.$id}
                      draggableId={task.$id}
                      index={index}
                    >
                      {(provider) => (
                        <TaskCard
                          task={task}
                          index={index}
                          id={id}
                          innerRef={provider.innerRef}
                          draggableProps={provider.draggableProps}
                          dragHandleProps={provider.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provider.placeholder}
                  <div className="flex items-end justify-end p-2">
                    <button className="text-green-500 hover: text-green-600">
                      <PlusCircleIcon className="h-10 w-10" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;

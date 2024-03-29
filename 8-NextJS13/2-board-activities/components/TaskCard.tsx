"use-client";

import { XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
  task: Task;
  index: number;
  id: TypedColumn;
  innerRef: (instance: HTMLDivElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

function TaskCard({
  task,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) {

  console.log('task', task);

  return (
    <div
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
      className="bg-white rounded-md space-y-2 drop-shadow-md"
    >
      <div className="flex justify-between items-center p-5">
        <p>{task.title}</p>
        <button className="text-red-500 hover:text-red-600">
          <XCircleIcon className="ml-5 h-8 w-8" />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;

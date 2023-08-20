"use client";

import { useBoardStore } from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./Column";

function Board() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);
  // const board = useBoardStore((state) => state.board);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (dropResult: DropResult) => {
    
  }

  return (
    <div>
      <DragDropContext onDragEnd={e => handleOnDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided, snapshot) => (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {Array.from(board.columns.entries()).map(
                ([id, column], index) => (
                  <Column key={id} id={id} tasks={column.tasks} index={index} />
                )
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Board;

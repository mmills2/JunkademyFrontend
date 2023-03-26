import WorkspaceBlock from "./WorkspaceBlock";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Sandbox(props) {
  let content = props.content;

  return (
    <div id="sandbox">
      <div className="mainTitleDiv">
        <h2 className="mainTitles">Information</h2>
      </div>
      <div id="workspace" className="contentDiv">
        {content}
      </div>
    </div>
  );
}

export default Sandbox;

/*

const workspaceBlocks = [
  {
    name: "block 1",
  },
  {
    name: "block 2",
  },
  {
    name: "block 3",
  },
  {
    name: "block 4",
  },
  {
    name: "block 5",
  },
];

const [blocks, updateBlocks] = useState(workspaceBlocks);

  function handleOnDragEnd(result) {
    const items = Array.from(blocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    if (!result.destination) {
      updateBlocks(items);
      return;
    }

    items.splice(result.destination.index, 0, reorderedItem);
    updateBlocks(items);
  }

<DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="workspaceBlockList">
            {(provided) => (
              <ul
                className="workspaceBlockList"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {blocks.map(({ name }, index) => {
                  return (
                    <Draggable key={name} draggableId={name} index={index}>
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <WorkspaceBlock name={name} />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
*/
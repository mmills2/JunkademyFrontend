import WorkspaceBlock from "./WorkspaceBlock";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const workspaceBlocks = [];

function Sandbox(props) {
  let addedName = props.addedName;
  let addedInput = props.addedInput;
  let count = props.count;

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

  useEffect(() => {
    function addBlock() {
      let newBlock = [];
      if (addedName === "If") {
        newBlock = [
          { name: addedName, input: addedInput },
          { name: "End If", input: false },
        ];
      } else if (addedName === "Else") {
        newBlock = [
          { name: addedName, input: addedInput },
          { name: "End Else", input: false },
        ];
      } else if (addedName === "For Loop") {
        newBlock = [
          { name: addedName, input: addedInput },
          { name: "End For Loop", input: false },
        ];
      } else if (addedName === "While Loop") {
        newBlock = [
          { name: addedName, input: addedInput },
          { name: "End While Loop", input: false },
        ];
      } else {
        newBlock = [{ name: addedName, input: addedInput }];
      }
      let newArray = blocks.concat(newBlock);
      updateBlocks(newArray);
    }

    if (count !== 0) {
      addBlock();
    }
  }, [count]);

  return (
    <div id="sandbox">
      <div className="mainTitleDiv">
        <h2 className="mainTitles">Sandbox</h2>
      </div>
      <div id="workspace" className="contentDiv">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="workspaceBlockList">
            {(provided) => (
              <ul
                className="workspaceBlockList"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {blocks.map(({ name, input }, index) => {
                  return (
                    <Draggable key={name} draggableId={name} index={index}>
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <WorkspaceBlock name={name} input={input} />
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
      </div>
    </div>
  );
}

export default Sandbox;

import WorkspaceBlock from "./WorkspaceBlock";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

function Sandbox(props) {
  let addedBlock = props.addedBlock;
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
      let newBlock = [{ name: addedBlock }];
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
        {/* <button onClick={addBlock}>Add Block</button> */}
      </div>
    </div>
  );
}

export default Sandbox;

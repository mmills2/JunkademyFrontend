import WorkspaceBlock from "./WorkspaceBlock";
import React, { useEffect, useRef, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const workspaceBlocks = [];

function Sandbox(props) {
  let addedName = props.addedName;
  let addedInput = props.addedInput;
  let count = props.count;
  let getArrayApp = props.getArrayApp;

  let numBlocks = useRef(-1);
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

  function updateValSandbox(blockId, blockValue) {
    blocks.find((e) => e.id === blockId).blockValue = blockValue;
    console.log(blocks.find((e) => e.id === blockId));
  }

  function onClick() {
    getArrayApp(blocks);
  }

  useEffect(() => {
    function addBlock() {
      let newBlock = [];
      if (addedName === "If") {
        numBlocks.current = numBlocks.current + 1;
        newBlock = [
          {
            id: numBlocks.current,
            name: addedName,
            input: addedInput,
            blockValue: "",
          },
          {
            id: numBlocks.current + 1,
            name: "End If",
            input: false,
            blockValue: "",
          },
        ];
        numBlocks.current = numBlocks.current + 1;
      } else if (addedName === "Else") {
        numBlocks.current = numBlocks.current + 1;
        newBlock = [
          {
            id: numBlocks.current,
            name: addedName,
            input: addedInput,
            blockValue: "",
          },
          {
            id: numBlocks.current + 1,
            name: "End Else",
            input: false,
            blockValue: "",
          },
        ];
        numBlocks.current = numBlocks.current + 1;
      } else if (addedName === "For Loop") {
        numBlocks.current = numBlocks.current + 1;
        newBlock = [
          {
            id: numBlocks.current,
            name: addedName,
            input: addedInput,
            blockValue: "",
          },
          {
            id: numBlocks.current + 1,
            name: "End For Loop",
            input: false,
            blockValue: "",
          },
        ];
        numBlocks.current = numBlocks.current + 1;
      } else if (addedName === "While Loop") {
        numBlocks.current = numBlocks.current + 1;
        newBlock = [
          {
            id: numBlocks.current,
            name: addedName,
            input: addedInput,
            blockValue: "",
          },
          {
            id: numBlocks.current + 1,
            name: "End While Loop",
            input: false,
            blockValue: "",
          },
        ];
        numBlocks.current = numBlocks.current + 1;
      } else {
        numBlocks.current = numBlocks.current + 1;
        newBlock = [
          {
            id: numBlocks.current,
            name: addedName,
            input: addedInput,
            blockValue: "",
          },
        ];
      }
      let newArray = blocks.concat(newBlock);
      updateBlocks(newArray);
      console.log(newArray);
    }

    if (count !== 0) {
      addBlock();
    }
  }, [count]);

  return (
    <div id="sandbox">
      <div className="mainTitleDiv">
        <h2 className="mainTitles">Sandbox</h2>
        <button onClick={onClick}>Translate</button>
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
                {blocks.map(({ id, name, input }, index) => {
                  return (
                    <Draggable
                      key={id}
                      draggableId={id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <WorkspaceBlock
                            id={id}
                            name={name}
                            input={input}
                            updateValSandbox={updateValSandbox}
                          />
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

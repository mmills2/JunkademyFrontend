import Draggable, { DraggableCore } from "react-draggable";
import CBLBlock from "./CBLBlock.js";
import { Dropdown } from "./Dropdown.js";

function CodeBlockLibrary() {
  return (
    <div id="codeBlockLibrary">
      <div className="mainTitleDiv">
        <h2 className="mainTitles" id="cblTitle">
          Code Block Library
        </h2>
      </div>
      <div id="catTitleDiv" className="contentDiv">
        <h3 id="catTitle">Categories</h3>
      </div>
      <div id="categories" className="contentDiv">
        <Dropdown catTitle={"Structural"}>
          <div>Blocks go here</div>
        </Dropdown>
        <Dropdown catTitle={"Variables"}>
          <div>I am a block</div>
          <div>I am another block</div>
        </Dropdown>
        <Dropdown catTitle={"Conditional"}>
          <div>B</div>
          <div>Bl</div>
          <div>Blo</div>
          <div>Bloc</div>
          <div>Block</div>
        </Dropdown>
        <Dropdown catTitle={"Iterative"}>
          <CBLBlock cblTitle={"test drag"}></CBLBlock>
          <CBLBlock cblTitle={"hhhhhhhhhh"}></CBLBlock>
          <CBLBlock cblTitle={"babababa"}></CBLBlock>
        </Dropdown>
        <Dropdown catTitle={"I/O"} />
        <Dropdown catTitle={"Operators"} />
      </div>
    </div>
  );
}

export default CodeBlockLibrary;

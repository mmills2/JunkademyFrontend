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
        <Dropdown catTitle={"Variables"} />
        <Dropdown catTitle={"Conditional"} />
        <Dropdown catTitle={"Iterative"} />
        <Dropdown catTitle={"I/O"} />
        <Dropdown catTitle={"Operators"} />
      </div>
    </div>
  );
}

export default CodeBlockLibrary;

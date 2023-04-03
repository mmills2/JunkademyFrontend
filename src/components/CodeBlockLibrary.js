import { Dropdown } from "./Dropdown.js";
import { CBLButton } from "./CBLButton.js";

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
        <Dropdown catTitle={"Variables"}>
        <CBLButton
            name="Integer"
          />
          <CBLButton
            name="Double"
          />
          <CBLButton
            name="Boolean"
          />
          <CBLButton
            name="Character"
          />
          <CBLButton
            name="String"
          />
        </Dropdown>
        <Dropdown catTitle={"Conditional"}>
        <CBLButton
            name="If"
          />
          <CBLButton
            name="Else"
          />
        </Dropdown>
        <Dropdown catTitle={"Iterative"} >
        <CBLButton
            name="For Loop"
          />
          <CBLButton
            name="While Loop"
          />
        </Dropdown>
        {/*<Dropdown catTitle={"I/O"} />*/}
        <Dropdown catTitle={"Operators"} >
        <CBLButton
            name="Add"
          />
          <CBLButton
            name="Subtract"
          />
          <CBLButton
            name="Multiply"
          />
          <CBLButton
            name="Divide"
          />
          <CBLButton
            name="And"
          />
          <CBLButton
            name="Or"
          />
          <CBLButton
            name="Equals"
          />
          <CBLButton
            name="Not"
          />
          <CBLButton
            name="Greater Than"
          />
          <CBLButton
            name="Less Than"
          />
        </Dropdown>
        <Dropdown catTitle={"Output"}>
          <CBLButton
            name="Print"
          />
        </Dropdown>
      </div>
    </div>
  );
}

export default CodeBlockLibrary;

import { Dropdown } from "./Dropdown.js";
import { CBLButton } from "./CBLButton.js";

function CodeBlockLibrary(props) {
  let addBlockApp = props.addBlockApp;

  function addBlockCBL(name) {
    addBlockApp(name);
  }

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
          <CBLButton name="Integer" addBlockCBL={addBlockCBL} />
          <CBLButton name="Double" addBlockCBL={addBlockCBL} />
          <CBLButton name="Boolean" addBlockCBL={addBlockCBL} />
          <CBLButton name="Character" addBlockCBL={addBlockCBL} />
          <CBLButton name="String" addBlockCBL={addBlockCBL} />
        </Dropdown>
        <Dropdown catTitle={"Conditional"}>
          <CBLButton name="If" addBlockCBL={addBlockCBL} />
          <CBLButton name="Else" addBlockCBL={addBlockCBL} />
        </Dropdown>
        <Dropdown catTitle={"Iterative"}>
          <CBLButton name="For Loop" addBlockCBL={addBlockCBL} />
          <CBLButton name="While Loop" addBlockCBL={addBlockCBL} />
        </Dropdown>
        {/*<Dropdown catTitle={"I/O"} />*/}
        <Dropdown catTitle={"Operators"}>
          <CBLButton name="Add" addBlockCBL={addBlockCBL} />
          <CBLButton name="Subtract" addBlockCBL={addBlockCBL} />
          <CBLButton name="Multiply" addBlockCBL={addBlockCBL} />
          <CBLButton name="Divide" addBlockCBL={addBlockCBL} />
          <CBLButton name="And" addBlockCBL={addBlockCBL} />
          <CBLButton name="Or" addBlockCBL={addBlockCBL} />
          <CBLButton name="Equals" addBlockCBL={addBlockCBL} />
          <CBLButton name="Not" addBlockCBL={addBlockCBL} />
          <CBLButton name="Greater Than" addBlockCBL={addBlockCBL} />
          <CBLButton name="Less Than" addBlockCBL={addBlockCBL} />
        </Dropdown>
        <Dropdown catTitle={"Output"}>
          <CBLButton name="Print" addBlockCBL={addBlockCBL} />
        </Dropdown>
      </div>
    </div>
  );
}

export default CodeBlockLibrary;

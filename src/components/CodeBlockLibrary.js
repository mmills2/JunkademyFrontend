import { Dropdown } from "./Dropdown.js";
import { CBLButton } from "./CBLButton.js";

function CodeBlockLibrary(props) {
  let addBlockApp = props.addBlockApp;

  function addBlockCBL(name, input) {
    addBlockApp(name, input);
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
          <CBLButton name="Integer" input={true} addBlockCBL={addBlockCBL} />
          <CBLButton name="Double" input={true} addBlockCBL={addBlockCBL} />
          <CBLButton name="Boolean" input={true} addBlockCBL={addBlockCBL} />
          <CBLButton name="Character" input={true} addBlockCBL={addBlockCBL} />
          <CBLButton name="String" input={true} addBlockCBL={addBlockCBL} />
        </Dropdown>
        <Dropdown catTitle={"Conditional"}>
          <CBLButton name="If" input={true} addBlockCBL={addBlockCBL} />
          <CBLButton name="Else" input={true} addBlockCBL={addBlockCBL} />
        </Dropdown>
        <Dropdown catTitle={"Iterative"}>
          <CBLButton name="For Loop" input={true} addBlockCBL={addBlockCBL} />
          <CBLButton name="While Loop" input={true} addBlockCBL={addBlockCBL} />
        </Dropdown>
        <Dropdown catTitle={"Operators"}>
          <CBLButton name="Add" input={false} addBlockCBL={addBlockCBL} />
          <CBLButton name="Subtract" input={false} addBlockCBL={addBlockCBL} />
          <CBLButton name="Multiply" input={false} addBlockCBL={addBlockCBL} />
          <CBLButton name="Divide" input={false} addBlockCBL={addBlockCBL} />
          <CBLButton name="And" input={false} addBlockCBL={addBlockCBL} />
          <CBLButton name="Or" input={false} addBlockCBL={addBlockCBL} />
          <CBLButton name="Equals" input={false} addBlockCBL={addBlockCBL} />
          <CBLButton name="Not" input={false} addBlockCBL={addBlockCBL} />
          <CBLButton
            name="Greater Than"
            input={false}
            addBlockCBL={addBlockCBL}
          />
          <CBLButton name="Less Than" input={false} addBlockCBL={addBlockCBL} />
        </Dropdown>
        <Dropdown catTitle={"Output"}>
          <CBLButton name="Print" input={true} addBlockCBL={addBlockCBL} />
        </Dropdown>
      </div>
    </div>
  );
}

export default CodeBlockLibrary;

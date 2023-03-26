import { Dropdown } from "./Dropdown.js";
import {CBLButton} from "./CBLButton.js";

function CodeBlockLibrary(props) {
  let updateSandbox = props.updateSandbox;

  function updateText(text){
    updateSandbox(text);
  }

  function handleClick(){
    //console.log("cbl clicked");
    // console.log("event.target: " + event.target);
    // console.log("event.currentTarget: " + event.currentTarget);
  }

  return (
    <div id="codeBlockLibrary" onClick = {handleClick}>
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
          <CBLButton updateText = {updateText} name = "Print" content = "printing test"/>
          <CBLButton updateText = {updateText} name = "Loop" content = "again and again"/>
          <CBLButton updateText = {updateText} name = "If" content = "maybe? maybe not"/>
        </Dropdown>
        <Dropdown catTitle={"Variables"} />
        <Dropdown catTitle={"Conditional"} />
        <Dropdown catTitle={"Iterative"} />
        {/* <Dropdown catTitle={"I/O"} /> */}
        <Dropdown catTitle={"Operators"} />
      </div>
    </div>
  );
}

export default CodeBlockLibrary;

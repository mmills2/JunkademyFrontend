import { Dropdown } from "./Dropdown.js";
import {CBLButton} from "./CBLButton.js";

function CodeBlockLibrary(props) {
  let updateSandbox = props.updateSandbox;

  function updateText(text){
    updateSandbox(text);
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
        <Dropdown catTitle={"Structural"} >
          <CBLButton updateText = {updateText} name = "Print" content = "print content"/>
        </Dropdown>
        <Dropdown catTitle={"Variables"} >
          <CBLButton updateText = {updateText} name = "Integer" content = "integer content"/>
          <CBLButton updateText = {updateText} name = "Double" content = "double content"/>
          <CBLButton updateText = {updateText} name = "Boolean" content = "bool content"/>
          <CBLButton updateText = {updateText} name = "Character" content = "char content"/>
          <CBLButton updateText = {updateText} name = "String" content = "string content"/>
          <CBLButton updateText = {updateText} name = "Array" content = "array content"/>
          </Dropdown>
        <Dropdown catTitle={"Conditional"} >
          <CBLButton updateText = {updateText} name = "If" content = "if content"/>
          <CBLButton updateText = {updateText} name = "Else" content = "else content"/>
        </Dropdown>
        <Dropdown catTitle={"Iterative"} >
          <CBLButton updateText = {updateText} name = "For Loop" content = "for loop content"/>
          <CBLButton updateText = {updateText} name = "While Loop" content = "while loop content"/>
        </Dropdown>
        {/* <Dropdown catTitle={"I/O"} /> */}
        <Dropdown catTitle={"Operators"} >
          <CBLButton updateText = {updateText} name = "Add" content = "add content"/>
          <CBLButton updateText = {updateText} name = "Subtract" content = "subtraction content"/>
          <CBLButton updateText = {updateText} name = "Multiply" content = "multiplication content"/>
          <CBLButton updateText = {updateText} name = "Divide" content = "division content"/>
          <CBLButton updateText = {updateText} name = "And" content = "and content"/>
          <CBLButton updateText = {updateText} name = "Or" content = "or content"/>
          <CBLButton updateText = {updateText} name = "Equals" content = "equals content"/>
          <CBLButton updateText = {updateText} name = "Not" content = "not content"/>
          <CBLButton updateText = {updateText} name = "Greater Than" content = "greater than content"/>
          <CBLButton updateText = {updateText} name = "Less Than" content = "less than content"/>
        </Dropdown>
      </div>
    </div>
  );
}

export default CodeBlockLibrary;

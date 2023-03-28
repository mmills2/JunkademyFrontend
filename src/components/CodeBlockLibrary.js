import { Dropdown } from "./Dropdown.js";
import {CBLButton} from "./CBLButton.js";

function CodeBlockLibrary(props) {
  let updateSandbox = props.updateSandbox;
  let updateTitle = props.updateTitle;
  let updateCodeSnippet = props.updateCodeSnippet;

  function updateText(text){
    updateSandbox(text);
  }

  function CBLUpdateTitle(title){
    updateTitle(title);
  }

  function CBLUpdateCodeSnippet(codeSnippet){
    updateCodeSnippet(codeSnippet)
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
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Print" codeSnippet = {"System.out.println(\"Hello World!\");"} 
            content = {"The print block allows you to make your computer talk to you! Anything that you type into the block will be printed out by your program exactly as you type it. In Java, you use the line of code: \"System.out.println()\" and you put whatever you want printed into the parentheses. Print statements are great for debugging! If you aren't sure if your program is running as it should, put in some print statements between logical statements to see what's going on behind the scenes."}/>
        </Dropdown>
        <Dropdown catTitle={"Variables"} >
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet}
            name = "Integer" codeSnippet = "int apples = 5;" content = "integer content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Double" codeSnippet = "double miles = 3.7" content = "double content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Boolean" codeSnippet = "bool isHungry = true" content = "bool content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Character" codeSnippet = {"char firstLetter = \'A\'"} content = "char content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "String" codeSnippet = "string snippet" content = "string content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Array" codeSnippet = "array snippet" content = "array content"/>
          </Dropdown>
        <Dropdown catTitle={"Conditional"} >
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "If" codeSnippet = "if snippet" content = "if content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Else" codeSnippet = "else snippet" content = "else content"/>
        </Dropdown>
        <Dropdown catTitle={"Iterative"} >
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "For Loop" codeSnippet = "for snippet" content = "for loop content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "While Loop" codeSnippet = "while snippet" content = "while loop content"/>
        </Dropdown>
        {/* <Dropdown catTitle={"I/O"} /> */}
        <Dropdown catTitle={"Operators"} >
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Add" codeSnippet = "add snippet" content = "add content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Subtract" codeSnippet = "subtract snippet" content = "subtraction content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Multiply" codeSnippet = "multiply snippet" content = "multiplication content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Divide" codeSnippet = "divide snippet" content = "division content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "And" codeSnippet = "and snippet" content = "and content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Or" codeSnippet = "or snippet" content = "or content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Equals" codeSnippet = "equals snippet" content = "equals content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Not" codeSnippet = "not snippet" content = "not content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Greater Than" codeSnippet = "greater than snippet" content = "greater than content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet}
            name = "Less Than" codeSnippet = "less than snippet" content = "less than content"/>
        </Dropdown>
      </div>
    </div>
  );
}

export default CodeBlockLibrary;

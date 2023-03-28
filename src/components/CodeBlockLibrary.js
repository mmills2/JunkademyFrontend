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
    updateCodeSnippet(codeSnippet);
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
            name = "Integer" codeSnippet = "int apples = 5;" 
            content = {"An integer is a whole number value that can either be positive or negative. To make a double in Junkademy, you simply type the number you would like to assign to the variable into the block. In Java, to make an Integer variable, you use the keyword \"int\", followed by the variable's name, then an equals sign, and then you put whichever number you would like to assign to the variable after the equals sign."}/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Double" codeSnippet = "double miles = 3.7;" 
            content = {"A double is a decimal value that can be either positive or negative. Doubles can also store whole number values, such as 10.0. To make a double in Junkademy,"}/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Boolean" codeSnippet = "bool isHungry = true;" content = "bool content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Character" codeSnippet = {"char firstLetter = \'A\';"} content = "char content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "String" codeSnippet = {"String name = \"Big Bird\";"} content = "string content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Array" codeSnippet = {"double[] prices = new double[] {27.26, 34.50, 64.32};"} content = "array content"/>
          </Dropdown>
        <Dropdown catTitle={"Conditional"} >
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "If" codeSnippet = {"if(value > 5) {\n //Do something \n}"} content = "if content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Else" codeSnippet = {"else {\n //Do something else \n}"} content = "else content"/>
        </Dropdown>
        <Dropdown catTitle={"Iterative"} >
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "For Loop" codeSnippet = {"for(int i=0; i<10; i++) {\n //Do something iteratively }"} content = "for loop content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "While Loop" codeSnippet = {"while(x < 10) {\n //Do something iteratively }"} content = "while loop content"/>
        </Dropdown>
        {/* <Dropdown catTitle={"I/O"} /> */}
        <Dropdown catTitle={"Operators"} >
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Add" codeSnippet = "x + 10" content = "add content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Subtract" codeSnippet = "x - 3" content = "subtraction content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Multiply" codeSnippet = "x * 2" content = "multiplication content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Divide" codeSnippet = "x / 5" content = "division content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "And" codeSnippet = "if(boolean1 && boolean2)" content = "and content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Or" codeSnippet = "if(boolean1 || boolean2)" content = "or content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Equals" codeSnippet = "if(x == y)" content = "equals content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Not" codeSnippet = "!true == false" content = "not content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet} 
            name = "Greater Than" codeSnippet = "if(x > 5)" content = "greater than content"/>
          <CBLButton updateText = {updateText} updateTitle = {CBLUpdateTitle} updateCodeSnippet = {CBLUpdateCodeSnippet}
            name = "Less Than" codeSnippet = "if(x < 200)" content = "less than content"/>
        </Dropdown>
      </div>
    </div>
  );
}

export default CodeBlockLibrary;

import { Dropdown } from "./Dropdown.js";
import { CBLButton } from "./CBLButton.js";

function CodeBlockLibrary(props) {
  let updateSandbox = props.updateSandbox;
  let updateTitle = props.updateTitle;
  let updateCodeSnippet = props.updateCodeSnippet;

  function updateText(text) {
    updateSandbox(text);
  }

  function CBLUpdateTitle(title) {
    updateTitle(title);
  }

  function CBLUpdateCodeSnippet(codeSnippet) {
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
        <Dropdown catTitle={"Variables"}>
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Integer"
            codeSnippet="int apples = 5;"
            content={
              'An integer is a whole number value that can either be positive or negative. To make an Integer in Junkademy, you simply type the number you would like to assign to the variable into the block. In Java, to make an Integer variable, you use the keyword "int", followed by the variable\'s name, then an equals sign, and then you put whichever number you would like to assign to the variable after the equals sign.'
            }
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Double"
            codeSnippet="double miles = 3.7;"
            content={
              'A double is a decimal value that can be either positive or negative. Doubles can also store whole number values, such as 10.0. To make a Double in Junkademy, you simply type the decimal you would like to assign to the varaible into the block. In Java, to make a Double variable, you use the keyword "double", followed by the variable\'s name, then an equals sign, and then you put whichever decimal you would like to assign to the variable after the equals sign.'
            }
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Boolean"
            codeSnippet="boolean isHungry = true;"
            content={
              'A boolean is a value that represents either true or false. To make a Boolean in Junkademy, you simply click the checkbox in the block indicating whether the value should be true or false. In Java, to make a Boolean variable, you use the keyword "boolean", followed by the variable\'s name, then an equals sign, and then either "true" or "false" depending on which value you would like to assign to the variable.'
            }
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Character"
            codeSnippet={"char firstLetter = 'A';"}
            content={
              'A char is a value that represents a single character. Behind the scenes in Java, characters are actually just integers associated with a specific character. To make a Char in Junkademy, you simply type the character you would like to assign to the variable into the block. In Java, to make a Char variable, you use the keyword "char", followed by the variable\'s name, then an equals sign, and then you put whichever character you would like to assign to the variable after the equals sign.'
            }
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="String"
            codeSnippet={'String name = "Big Bird";'}
            content={
              'A String is a collection of characters. Strings can contain any number of letters, numbers, or other symbols. Behind the scenes in Java, Strings are actually Arrays of Characters. To make a String in Junkademy, you simply type the characters you would like to assign to the varaible into the block. In Java, to make a String variable, you use the keyword "String" with a captial S, followed by the variable\'s name, then an equals sign, and then you put whatever characters you would like to assign to the variable after the equals sign. Make sure to enclose the characters in "double quotes!"'
            }
          />
        </Dropdown>
        <Dropdown catTitle={"Conditional"}>
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="If"
            codeSnippet={"if(value > 5) {\n //Do something \n}"}
            content={"The if statement allows you to tell your program to decide to execute some code only if a certain condition is true. In the example above, the program would only ever execute code in the \"{curly braces}\" if \"value\" is a number greater than 5. To use an if statement in Junkademy, you simply enter the condition that should be true in order to execute the code in the if statement, and then drag all of the statements you want to execute between the \"if\" block and the \"endif\" block. To use an if statement in Java, you type \"if\", followed by the desired condition in \"(parentheses)\", and then you type all of the code you want to execute in \"{curly braces}\" after the closing parentheses."}
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Else"
            codeSnippet={"else {\n //Do something else \n}"}
            content={"The else statement allows you to tell your program to execute some other code if the condition in an if statement is false. You can only ever put an else statement after the closing curly brace of an if statement. Using an else statement is very similar to using an if statement both in Junkademy and in Java, the only difference is there is no condition. In Junkademy, you simply drag all of the statements you want to execute between the \"else\" block and the \"endelse\" block. In Java, you type all of the code you want to execute between \"{curly braces}\" after the keyword else."}
          />
        </Dropdown>
        <Dropdown catTitle={"Loops"}>
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="For Loop"
            codeSnippet={
              "for(int i=0; i<10; i++) {\n //Do something iteratively }"
            }
            content={"The for loop allows you to tell your program to do something a fixed number of times. In the example above, the for loop will run exactly 10 times. To use a for loop in Junkademy, you simply enter the number of times you would like the loop to run in the \"repeat\" block. Drag all of the statements you would like to execute in the for loop between the \"repeat\" block and the \"endloop\" block. In Java, you type the keyword \"for\", followed by \"(parentheses)\", and then there are three parts that must go inside. The first is the declaration of your loop variable, which is often delcared as \"i\". You delcare the loop variable and set it equal to its starting value. In the example above, we set \"i\" equal to 0. The next part of the loop indicates the end condition. In the example above, the loop will execute as long as \"i\" is less than 10. The last part of the loop indicates how the loop variable should change after each run through the loop. In the example above, \"i++\" means that we add 1 to \"i\" after each run through. All code that you want to execute on each pass through the loop should go between the \"{curly braces}\"."}
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="While Loop"
            codeSnippet={"while(x < 10) {\n //Do something iteratively }"}
            content={"The while loop is very similar to the for loop, except that the while loop tells your program to do something while a certain condition is true. In the example above, the while loop will run as long as the value \"x\" is less than 10. To use a while loop in Junkdaemy, you simply enter the condition that must be true in order for the loop to run in the \"repeat while\" block. Drag all of the statements you would like to execute in the while loop between the \"repeat while\" block and the \"endloop\" block. In Java, you type the keyword \"while\", followed by \"(parentheses)\", and then inside you type the condition that must be true for the loop to continue running. All code that you want to execute on each pass through the loop should go between the \"{curly braces}\". In order to make sure you do not create an infinite loop, it is common practice to update the variable being used in the condition in the body of the loop."}
          />
        </Dropdown>
        {/* <Dropdown catTitle={"I/O"} /> */}
        <Dropdown catTitle={"Operators"}>
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Add"
            codeSnippet="x + 10"
            content={"To add two values, we use the plus sign \"+\". In Junkademy, you simply click the \"Add Operator\" button to add a \"+\" block to your program. In Java, the plus sign \"+\" can be used to add a static value to a variable, add two variables together, and can even be used to concatenate two strings together."}
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Subtract"
            codeSnippet="x - 3"
            content={"To subtract a value from another value, we use the minus sign \"-\". In Junkademy, you simply click the \"Subtraction Operator\" button to add a \"-\" block to your program. In Java, the minus sign \"-\" can be used to subtract a static value from a variable, to subtract the value of a variable from a static value, or can be used to subtract the value of one variable from another."}
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Multiply"
            codeSnippet="x * 2"
            content={"To multiply one value by another, we use the asterisk \"*\". In Junkademy, you simply click the \"Multiplication Operator\" button to add a \"*\" block to your program. In Java, the asterisk \"*\" can be used to multiply a variable by a static value, to multiply a static value by the value of a variable, or to multiply the value of two variables together."}
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Divide"
            codeSnippet="x / 5"
            content={"To divide one value by another, we use the forward slash \"/\". In Junkademy, you simply click the \"Division Operator\" button to add a \"/\" block to your program. In Java, the forward slash \"/\" can be used to divide a variable by a static value, to divide a static value by the value of a variable, or to divide the value of one variable by the value of another."}
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="And"
            codeSnippet="if(boolean1 && boolean2)"
            content={"The And Operator is used to evaluate two different booleans and the statement returns true only if BOTH booleans are true. In the above example, both \"boolean1\" AND \"boolean2\" must be true for \"boolean1 && boolean2\" to be true as well. In Junkademy, you simply click the \"And Operator\" button to add the \"&&\" block to your program. In Java, you type two ampersands \"&\" together between two boolean expressions."}
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Or"
            codeSnippet="if(boolean1 || boolean2)"
            content={"The Or Operator is used to evaluate two different booleans and the statement returns true EITHER of the booleans are true. In the above example, either \"boolean1\" OR \"boolean2\" can be true for \"boolean1 || boolean2\" to be true as well. In Junkademy, you simply click the \"Or Operator\" button to add the \"||\" block to your program. In Java, you type two pipes \"|\" together between two boolean expressions."}
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Equals"
            codeSnippet="if(x == y)"
            content={"The Equals Operator can be confusing at first because it looks just like the Assignment Operator \"=\". However, putting two equals signs next to each other will check if two values are the same, while using a single equals sign will set the value on the left side to the value on the right side. In the example above, the code in the if statement will only execute if the value of x is equal to the value of y. To use the Equals Operator in Junkademy, you simply click the \"Equals Operator\" button to add the \"==\" block to your program. In Java, you type two equals signs \"=\" together between the two values you are trying to equate. The Equals Operator works on all numeric and boolean datatypes."}
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Not"
            codeSnippet="!true == false"
            content={"The Not Operator can be used to invert a boolean value, and is denoted using the exclamation point \"!\". In the example above, the Not Operator would invert the \"true\" statement turning it to \"false\", and then the entire expression would evaluate to true since false is equal to false. To use the Not Operator in Junkademy, you simple click the \"Not Operator\" button to add the \"!\" block to your program. In Java, you type an exclamation point \"!\" in front of whichever value you would like to invert. The Not Operator can be helpful to check if something is not true or if something has not happened yet."}
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Greater Than"
            codeSnippet="if(x > 5)"
            content={"The Greater Than Operator is used to evaluate two expressions and returns true if the first value is greater than the second. It uses the greater than symbol \">\". In the example above, the code in the if statement will only execute if the value of \"x\" is greater than 5. To use the Greater Than Operator in Junkademy, you simply click the \"Greater Than Operator\" button to add the \">\" block to your program. In Java, you type the greater than symbol \">\" between the two expressions you are trying to compare. The greater than symbol \">\" can also be combined with an equals sign \">=\" to indicate that the expression should also return true if the two values are equal."}
          />
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Less Than"
            codeSnippet="if(x < 200)"
            content={"The Less Than Operator is used to evaluate two expressions and returns true if the first value is less than the second. It uses the less than symbol \"<\". In the example above, the code in the if statement will only execute if the value of \"x\" is less than 200. To use the Less Than Operator in Junkademy, you simply click the \"Less Than Operator\" button to add the \"<\" block to your program. In Java, you type the less than symbol \"<\" between the two expressions you are trying to compare. The less than symbol \"<\" can also be combined with an equals sign \"<=\" to indicate that the expression should also return true if the two values are equal."}
          />
        </Dropdown>
        <Dropdown catTitle={"Output"}>
          <CBLButton
            updateText={updateText}
            updateTitle={CBLUpdateTitle}
            updateCodeSnippet={CBLUpdateCodeSnippet}
            name="Print"
            codeSnippet={'System.out.println("Hello World!");'}
            content={
              "The print block allows you to make your computer talk to you! Anything that you type into the block will be printed out by your program exactly as you type it. In Java, you use the line of code: \"System.out.println()\" and you put whatever you want printed into the parentheses. Print statements are great for debugging! If you aren't sure if your program is running as it should, put in some print statements between logical statements to see what's going on behind the scenes."
            }
          />
        </Dropdown>
      </div>
    </div>
  );
}

export default CodeBlockLibrary;

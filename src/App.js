import HomeHeader from "./components/HomeHeader";
import CodeBlockLibrary from "./components/CodeBlockLibrary";
import Sandbox from "./components/Sandbox";
import JWindow from "./components/JWindow.js";
import TWindow from "./components/TWindow";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [input, setInput] = useState(false);
  const [count, setCount] = useState(0);
  const [syntax, setSyntax] = useState("");

  function addBlockApp(name, input) {
    setCount(count + 1);
    setName(name);
    setInput(input);
  }

  function setSyntaxApp(syntax) {
    setSyntax(syntax);
  }

  return (
    <div id="mainGrid">
      <HomeHeader />
      <CodeBlockLibrary addBlockApp={addBlockApp} />
      <Sandbox
        addedName={name}
        addedInput={input}
        count={count}
        setCount={setCount}
        setSyntaxApp={setSyntaxApp}
      />
      <JWindow syntax={syntax} />
    </div>
  );
}

export default App;

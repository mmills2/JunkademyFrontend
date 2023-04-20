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
  const [array, setArray] = useState([]);

  function addBlockApp(name, input) {
    setCount(count + 1);
    setName(name);
    setInput(input);
  }

  function getArrayApp(array) {
    setArray(array);
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
        getArrayApp={getArrayApp}
      />
      <JWindow array={array} />
    </div>
  );
}

export default App;

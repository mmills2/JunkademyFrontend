import HomeHeader from "./components/HomeHeader";
import CodeBlockLibrary from "./components/CodeBlockLibrary";
import Sandbox from "./components/Sandbox";
import JWindow from "./components/JWindow.js";
import TWindow from "./components/TWindow";
import { useState } from "react";

function App() {
  const [name, addBlock] = useState("");
  const [count, setCount] = useState(0);

  function addBlockApp(name) {
    setCount(count + 1);
    addBlock(name);
  }

  return (
    <div id="mainGrid">
      <HomeHeader />
      <CodeBlockLibrary addBlockApp={addBlockApp} />
      <Sandbox addedBlock={name} count={count} />
      <JWindow />
    </div>
  );
}

export default App;

import HomeHeader from "./components/HomeHeader";
import CodeBlockLibrary from "./components/CodeBlockLibrary";
import Sandbox from "./components/Sandbox";
import JWindow from "./components/JWindow.js";
import TWindow from "./components/TWindow";
import React, {useState} from 'react';

function App() {
  const [content,updateContent] = useState("");

  function updateSandbox(text){
    updateContent(text);
  }

  return (
    <div id="mainGrid">
      <HomeHeader />
      <CodeBlockLibrary updateSandbox = {updateSandbox}/>
      <Sandbox content = {content}/>
      {/* <JWindow /> */}
      {/* <TWindow /> */}
    </div>
  );
}

export default App;

import HomeHeader from "./components/HomeHeader";
import CodeBlockLibrary from "./components/CodeBlockLibrary";
import Sandbox from "./components/Sandbox";
import JWindow from "./components/JWindow.js";
import TWindow from "./components/TWindow";
import React, {useState} from 'react';

function App() {
  const [content,updateContent] = useState("");
  const [title, updateTitle] = useState("");
  const [codeSnippet, updateCodeSnippet] = useState("");

  function updateSandbox(text){
    updateContent(text);
  }

  function AppUpdateTitle(title){
    updateTitle(title);
  }

  function AppUpdateCodeSnippet(codeSnippet){
    updateCodeSnippet(codeSnippet);
  }

  return (
    <div id="mainGrid">
      <HomeHeader />
      <CodeBlockLibrary updateSandbox = {updateSandbox} updateTitle = {AppUpdateTitle} updateCodeSnippet = {AppUpdateCodeSnippet}/>
      <Sandbox title = {title} codeSnippet = {codeSnippet} content = {content}/>
      {/* <JWindow /> */}
      {/* <TWindow /> */}
    </div>
  );
}

export default App;

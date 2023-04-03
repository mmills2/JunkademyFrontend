import HomeHeader from "./components/HomeHeader";
import CodeBlockLibrary from "./components/CodeBlockLibrary";
import Sandbox from "./components/Sandbox";
import JWindow from "./components/JWindow.js";
import TWindow from "./components/TWindow";

function App() {
  return (
  <div id="mainGrid">
    <HomeHeader />
    <CodeBlockLibrary />
    <Sandbox />
    <JWindow />
    <TWindow />
   </div>
   
  );
}

export default App;

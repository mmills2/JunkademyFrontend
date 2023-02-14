import HomeHeader from "./components/HomeHeader";
import CodeBlockLibrary from "./components/CodeBlockLibrary";
import Sandbox from "./components/Sandbox";
import JWindow from "./components/JWindow.js";
import TWindow from "./components/TWindow";

function App() {
  return (
    <div>
      <HomeHeader />
      <div id="mainPage">
        <CodeBlockLibrary />
        <div id="east">
          <Sandbox />
          <JWindow />
          <TWindow />
        </div>
      </div>
    </div>
  );
}

export default App;

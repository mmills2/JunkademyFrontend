import HomeHeader from "./components/HomeHeader";
import CodeBlockLibrary from "./components/CodeBlockLibrary";
import Sandbox from "./components/Sandbox";
import JWindow from "./components/JWindow.js";
import TWindow from "./components/TWindow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <div id="mainGrid">
    <HomeHeader />
    <CodeBlockLibrary />
    <Sandbox />
    <JWindow />
    <TWindow />
    <Router>
      <Routes>
        <Route path="/" element={<mainGrid />} />
      </Routes>
   </Router>
   </div>
   
  );
}

export default App;

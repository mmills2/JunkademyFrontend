import { Dropdown } from "./Dropdown.js";
import { Element } from "./TestElement.js";

function CodeBlockLibrary() {
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
      <div id="categories" className="contentDiv"></div>
    </div>
  );
}

export default CodeBlockLibrary;

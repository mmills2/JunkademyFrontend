import { Dropdown } from "./Dropdown.js";
import { Element } from "./TestElement.js";

function CodeBlockLibrary() {
  return (
    <div id="codeBlockLibrary">
      <div className="lightBottom">
        <h2>Code Block Library</h2>
      </div>
      <div className="lightBottom">
        <h3>Categories</h3>
      </div>
      <div id="categories"></div>
    </div>
  );
}

export default CodeBlockLibrary;

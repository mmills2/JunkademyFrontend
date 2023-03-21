import { toHaveAccessibleName } from "@testing-library/jest-dom/dist/matchers";

function JWindow() {

  function onClick(){
    const blocks = document.querySelectorAll(".workspaceBlock");
    blocks.forEach(element =>
        console.log(element.textContent)
      );
  }

  return (
    <div id="jWindow">
      <div className="mainTitleDiv">
        <h2 className="mainTitles">Java Syntax Window</h2>
      </div>
      <div id="window" className="contentDiv">
        <button onClick = {onClick} type="button">
          Generate
        </button>
      </div>
    </div>
  );
}
export default JWindow;

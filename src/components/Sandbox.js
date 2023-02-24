import WorkspaceBlock from "./WorkspaceBlock";

function Sandbox() {
  return (
    <div id="sandbox">
      <div className="mainTitleDiv">
        <h2 className="mainTitles">Sandbox</h2>
      </div>
      <div id="workspace" className="contentDiv">
        <WorkspaceBlock />
      </div>
    </div>
  );
}

export default Sandbox;

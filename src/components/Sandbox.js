import WorkspaceBlock from "./WorkspaceBlock";
import React from "react";

class Sandbox extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div id="sandbox">
        <div className="mainTitleDiv">
          <h2 className="mainTitles">Sandbox</h2>
        </div>
        <div id="workspace" className="contentDiv">
          <WorkspaceBlock />
          <WorkspaceBlock />
        </div>
      </div>
    );
  }
}

export default Sandbox;


/*
function Sandbox() {
  return (
    <div id="sandbox">
      <div className="mainTitleDiv">
        <h2 className="mainTitles">Sandbox</h2>
      </div>
      <div id="workspace" className="contentDiv">
        <WorkspaceBlock targetX={300} targetY={200}/>
      </div>
    </div>
  );
}

export default Sandbox;
*/
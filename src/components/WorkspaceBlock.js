import React from "react";

function WorkspaceBlock(props){
    let name = props.name

    return (
        <div className="workspaceBlock">
            {name}
        </div>
    );
}

export default WorkspaceBlock;

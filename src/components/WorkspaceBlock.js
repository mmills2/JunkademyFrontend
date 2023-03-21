import React from "react";

function WorkspaceBlock(props){
    let name = props.name

    return (
        <div className="workspaceBlock">
            {name}
            <input type="text" name="parameter"></input>
        </div>
    );
}

export default WorkspaceBlock;

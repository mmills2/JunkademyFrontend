import { Component } from "react";
import Draggable, {DraggableCore} from 'react-draggable';

function WorkspaceBlock(){
    return (
        <Draggable bounds={"parent"}>
            <div className="workspaceBlock">
                Drag me!
            </div>
        </Draggable>
    );
}

export default WorkspaceBlock;






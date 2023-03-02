import React from "react";
import Draggable, {DraggableCore} from 'react-draggable';


class WorkspaceBlock extends React.Component{
    constructor(){
        super();
        /*
        this.state={
            x:0,
            y:0,
            lastClicked:false
        }
        */
        var lastClicked = false;
    }

    onStop = (e,data) => {
        //allBlocks gets all workspace blocks
        let allBlocks = document.querySelectorAll(".workspaceBlock");
        
        //iterate through allBlocks checking if any are close enough to snap with this one
        for(let i=0;i<allBlocks.length;i++){
             let curTransform = allBlocks[i].getAttribute("style");
             var curX = curTransform.substring(curTransform.indexOf('(')+1,curTransform.indexOf('p'));
             var curY = curTransform.substring(curTransform.indexOf('p')+3,curTransform.lastIndexOf('p'));
             
             if(data.x > curX - 30 && data.x < curX + 30 && data.y > curY - 30 && data.y < curY + 30){
                console.log("snap")
             }
        }
    }

    onStart = (e,data) => {

        let allBlocks = document.querySelectorAll(".workspaceBlock");
        /*    
        //iterate through allBlocks setting lastClicked to false on each
        for(let i=0;i<allBlocks.length;i++){
            allBlocks[i].getAttribute("state"); 
        }

        //set lastClicked to true on current block
        this.setState({lastClicked:true});
        */
        //console.log(allBlocks[0]);
        console.log(allBlocks[0]);
        
    }

    render(){
        return (
            <Draggable bounds={"parent"} onStop={this.onStop} onStart={this.onStart}>
                <div className="workspaceBlock">
                    Drag me!
                </div>
            </Draggable>
        );
    }
}


export default WorkspaceBlock;


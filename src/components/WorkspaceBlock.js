import React, { useState } from "react";

function WorkspaceBlock(props) {
  let name = props.name;
  let input = props.input;

  const [blockValue, setBlockValue] = useState("");

  return (
    <div className="workspaceBlock">
      {name}
      {(() => {
        if (input == true) {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "3px", marginRight: "3px" }}> = </div>
              <input
                type="text"
                onChange={(e) => setBlockValue(e.target.value)}
              />
            </div>
          );
        }
      })()}
    </div>
  );
}

export default WorkspaceBlock;

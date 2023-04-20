import React, { useState } from "react";

function WorkspaceBlock(props) {
  const [id, setId] = useState(props.id);
  let name = props.name;
  let input = props.input;
  let updateValSandbox = props.updateValSandbox;

  function realOnChange(e) {
    updateValSandbox(id, e.target.value);
  }

  return (
    <div className="workspaceBlock">
      {name}
      {(() => {
        if (input === true) {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "3px", marginRight: "3px" }}> = </div>
              <input type="text" onChange={realOnChange} />
            </div>
          );
        }
      })()}
    </div>
  );
}

export default WorkspaceBlock;

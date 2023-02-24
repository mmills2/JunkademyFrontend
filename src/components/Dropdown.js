import { useState } from "react";

function Dropdown(props) {
  let catTitle = props.catTitle;
  const [displayState, setDisplay] = useState("none");
  const [textState, setText] = useState("> " + catTitle);

  function handleClick() {
    if (displayState == "none") {
      setDisplay("block");
      setText("v " + catTitle);
    } else {
      setDisplay("none");
      setText("> " + catTitle);
    }
  }

  return (
    <div className="catDivs" onClick={handleClick}>
      <button className="catBtns">{textState}</button>
      <div style={{ display: displayState }}>{props.children}</div>
    </div>
  );
}

export { Dropdown };

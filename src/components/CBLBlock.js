import Draggable, { DraggableCore } from "react-draggable";

function CBLBlock(props) {
  let cblTitle = props.cblTitle;

  const eventHandler = (e, data) => {
    console.log(data.x, data.y);
  };

  return (
    <Draggable onStop={eventHandler}>
      <div className="cblBlock">{cblTitle}</div>
    </Draggable>
  );
}

export default CBLBlock;

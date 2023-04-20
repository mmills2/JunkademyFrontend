function CBLButton(props) {
  let name = props.name;
  let input = props.input;
  let addBlockCBL = props.addBlockCBL;

  function handleClick() {
    addBlockCBL(name, input);
  }

  return (
    <div onClick={handleClick} className="CBLBlock">
      {name}
    </div>
  );
}

export { CBLButton };

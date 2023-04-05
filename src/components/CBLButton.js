function CBLButton(props) {
  let name = props.name;
  let addBlockCBL = props.addBlockCBL;

  function handleClick() {
    addBlockCBL(name);
  }

  return (
    <div onClick={handleClick} className="CBLBlock">
      {name}
    </div>
  );
}

export { CBLButton };

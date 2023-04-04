function CBLButton(props) {
  let name = props.name;

  function handleClick() {}

  return (
    <div onClick={handleClick} className="CBLBlock">
      {name}
    </div>
  );
}

export { CBLButton };

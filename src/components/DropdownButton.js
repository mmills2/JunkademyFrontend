function DropdownButton(props) {
  var content = props.content;

  var handleClick = props.onClick;

  return (
    <div>
      <div>{props.bottomText}</div>
    </div>
  );
}

export { DropdownButton };

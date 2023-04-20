
function JWindow(props) {
  let syntax = props.syntax;
  

  return (
    <div id="jWindow">
      <div className="mainTitleDiv">
        <h2 className="mainTitles">Java Syntax Window</h2>
      </div>
      <div id="window" className="contentDiv"><a>{syntax}</a></div>
    </div>
  );
}
export default JWindow;

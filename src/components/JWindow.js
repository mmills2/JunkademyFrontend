function JWindow() {

  function onClick(){
    console.log(document.querySelectorAll(".workspaceBlock"))
  }

  return (
    <div id="jWindow">
      <div className="mainTitleDiv">
        <h2 className="mainTitles">Java Syntax Window</h2>
      </div>
      <div id="window" className="contentDiv">
      </div>
    </div>
  );
}
export default JWindow;

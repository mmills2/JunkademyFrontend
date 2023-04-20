import axios from "axios";

function JWindow(props) {
  let array = props.array;
  const TRANSLATE_BLOCKS_API_URL = "http://localhost:8080/translatecodeblocks";

  async function onClick() {
    const response = await axios.post(TRANSLATE_BLOCKS_API_URL, [
      {
        id: "print",
        param: "dear god please",
      },
    ]);
    console.log(response.data);
  }

  return (
    <div id="jWindow">
      <div className="mainTitleDiv">
        <h2 className="mainTitles">Java Syntax Window</h2>
      </div>
      <div id="window" className="contentDiv"></div>
    </div>
  );
}
export default JWindow;

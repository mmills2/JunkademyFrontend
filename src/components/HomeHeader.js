function HomeHeader() {
  return (
    <div id="homeHeader">
      <h1 id="junkademy">Junkademy</h1>
      <div id="headerButtonsDiv">
        <button id="challengesBut" className="headerButton" type="button">
          Challenges
        </button>
        <div id="loginsDiv">
          <button id="adminLogin" className="headerButton" type="button">
            Admin Login
          </button>
          <button id="userLogin" className="headerButton" type="button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;

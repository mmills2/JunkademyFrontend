function HomeHeader() {
  return (
    <div id="homeHeader">
      <h1 id="junkademy">Junkademy</h1>
      <div id="headerButtonsDiv">
        <button type="button">Challenges</button>
        <div id="loginsDiv">
          <button id="adminLogin" type="button">
            Admin Login
          </button>
          <button id="userLogin" type="button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;

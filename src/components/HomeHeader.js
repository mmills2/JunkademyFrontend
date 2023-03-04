import { Link } from 'react-router-dom';

function HomeHeader() {
  return (
    <div id="homeHeader">
      <h1 id="junkademy">Junkademy</h1>
      <div id="headerButtonsDiv">
        <button id="challengesBut" className="headerButton" type="button">
          Challenges
        </button>
        <div id="loginsDiv">
          <a href="/adminlogin">
          <button id="adminLogin" className="headerButton" type="button">
            Admin Login
          </button>
          </a>
          <a href="/login">
          <button id="userLogin" className="headerButton" type="button">
            Login
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;

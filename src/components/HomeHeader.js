import { useLongPress } from "use-long-press";
import React, { useState } from "react";

function HomeHeader() {
  const [clsAdmin, setClsAdmin] = useState("headerButton");
  const [clsUser, setClsUser] = useState("headerButton");

  function handleClick() {
    window.location = "/login.html";
  }

  const callback = React.useCallback(() => {}, []);

  const bind = useLongPress(callback, {
    onStart: (event, butID) =>
      butID.context == "admin"
        ? setClsAdmin("headerButtonPressed")
        : butID.context == "user"
        ? setClsUser("headerButtonPressed")
        : null,
    onFinish: (event, butID) =>
      butID.context == "admin"
        ? setClsAdmin("headerButton")
        : butID.context == "user"
        ? setClsUser("headerButton")
        : null,
    onCancel: (event, butID) =>
      butID.context == "admin"
        ? setClsAdmin("headerButton")
        : butID.context == "user"
        ? setClsUser("headerButton")
        : null,
  });

  return (
    <div id="homeHeader">
      <h1 id="junkademy">Junkademy</h1>
      <div id="headerButtonsDiv">
        <button id="challengesBut" className="headerButton" type="button">
          Challenges
        </button>
        <div id="loginsDiv">
          <button
            {...bind("admin")}
            id="adminLogin"
            className={clsAdmin}
            type="button"
            onClick={handleClick}
          >
            Admin Login
          </button>
          <button
            {...bind("user")}
            id="userLogin"
            className={clsUser}
            type="button"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;

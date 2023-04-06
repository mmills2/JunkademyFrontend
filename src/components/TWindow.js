import React from 'react';
import TerminalComponent from './terminal';
import './terminal.css';


function TWindow() {
  return (
    <div id="tWindow">
      <div className="mainTitleDiv">
        <h2 className="mainTitles">Terminal</h2>
        <TerminalComponent />
      </div>
      <div id="tReturn" className="contentDiv"></div>
    </div>
  );
}


export default TWindow;

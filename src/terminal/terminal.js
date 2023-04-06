import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);

  useEffect(() => {
    xtermRef.current = new Terminal();
    const fitAddon = new FitAddon();
    xtermRef.current.loadAddon(fitAddon);

    xtermRef.current.open(terminalRef.current);
    fitAddon.fit();

    // Example output
    xtermRef.current.writeln('Welcome to the terminal!');

    return () => {
      xtermRef.current.dispose();
    };
  }, []);

  <div id="terminal">
      <div className="mainTitleDiv">
        <h2 className="mainTitles">Terminal</h2>
      </div>
      <div id="tReturn" className="contentDiv"></div>
    </div>
};

export default TerminalComponent;

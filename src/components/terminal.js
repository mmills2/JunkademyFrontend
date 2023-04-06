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

  return <div ref={terminalRef} style={{ width: '100%', height: '100%' }} />;
};

export default TerminalComponent;

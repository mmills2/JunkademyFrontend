import React, { useState } from "react";
import "./Terminal.css";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Process input and generate output
      const newOutput = `You entered: ${input}`;
      setOutput(newOutput);
      setInput("");
    }
  };

  return (
    <div className="terminal">
      <div className="output">{output}</div>
      <input
        className="input"
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Terminal;

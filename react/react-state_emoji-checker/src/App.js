import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  function handleClick(event) {
    setCode(`${code + event.target.textContent}`);
  }

  const reset = () => {
    setCode("");
  };

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick(event);
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick(event);
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick(event);
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={reset}>
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}

import React from "react";
import "./styles.css";

export default function App() {
  return (
    <Button
      disabled={false}
      text="PUSH!"
      color="green"
      backgroundColor="black"
      width="400px"
      height="100px"
    />
  );
}

function Button({ color, disabled, text, backgroundColor, width, height }) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

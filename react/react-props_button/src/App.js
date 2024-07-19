import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => {
    console.log("ITS WORKING!");
  };

  return (
    <Button
      disabled={false}
      text="PUSH!"
      color="green"
      backgroundColor="black"
      width="400px"
      height="100px"
      onClick={handleClick}
    />
  );
}

function Button({
  color,
  disabled,
  text,
  backgroundColor,
  width,
  height,
  onClick,
}) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

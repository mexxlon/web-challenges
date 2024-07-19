import React from "react";
import "./styles.css";

export default function App() {
  const isHappy = true;
  return (
    <section>
      <Smiley isHappy={isHappy} />
    </section>
  );
}

function Smiley({ isHappy }) {
  return <section>{isHappy ? ":-)" : ":-("}</section>;
}

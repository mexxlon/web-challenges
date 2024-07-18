import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is the react test</h1>
      <h2>looks really good bro!</h2>
      <p>you must be a professional</p>
      <button>Click me!</button>
    </article>
  );
}

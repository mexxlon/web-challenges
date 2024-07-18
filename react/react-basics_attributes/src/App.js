import React from "react";
import "./styles.css";

export default function App() {
  return <NewArticle />;
}

function NewArticle() {
  return (
    <article className="article">
      <h2 className="article__title">Its Avocado time!</h2>
      <br />
      We all like Avocados!
      <br />
      <label htmlFor="inputField">Input:</label>
      <input id="inputField" />
      <a className="article__link" href="https://de.wikipedia.org/wiki/Avocado">
        Avocados yessssss!
      </a>
    </article>
  );
}

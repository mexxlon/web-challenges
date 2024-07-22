import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>This is the first test!</Button>
      <Button>The second test is really nice!</Button>
      <Button>Third Test baby!</Button>
      <Button>Alle guten Dinge sind 4!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

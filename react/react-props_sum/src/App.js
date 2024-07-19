import React from "react";
import "./styles.css";

export default function App() {
  return (
    <section>
      <Sum valueA={1} valueB={2} />
    </section>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <section>
      {valueA} + {valueB} = {valueA + valueB}
    </section>
  );
}

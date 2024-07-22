import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={increment}>
          +
        </button>
        <button type="button" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}

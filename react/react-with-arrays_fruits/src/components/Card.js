import React from "react";
import "./Card.css";

export default function Card({ name, color }) {
  const cardStyle = {
    "--card-background": `var(--color-${color})`,
  };

  return (
    <div className="card" style={cardStyle}>
      {name}
    </div>
  );
}

import React from "react";
import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [holiday, setHoliday] = useState("");

  const [date, setDate] = useState("");

  const holidayRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const holidayValue = form.holiday.value;
    const dateValue = form.date.value;

    setHoliday(holidayValue);
    setDate(dateValue);

    form.reset();

    holidayRef.current.focus();
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
          ref={holidayRef}
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}

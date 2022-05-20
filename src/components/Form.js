import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [timeSaid, setTimeSaid] = useState("");

  const timeChangeHandler = (event) => {
    setTimeSaid(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(timeSaid);
    setTimeSaid("");
  };

  return (
    <>
      <div className="form-content">
        <div className="card">
          <form onSubmit={submitHandler}>
            <label>Enter time in mins </label>
            <input
              type="number"
              min="1"
              value={timeSaid}
              onChange={timeChangeHandler}
            />
            <button type="submit">Calculate</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;

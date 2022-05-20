import React, { useState } from "react";

const Form = (props) => {
  const [timeSaid, setTimeSaid] = useState("");

  const timeChangeHandler = (event) => {
    setTimeSaid(event.target.value);
  };

  return (
    <form>
      <div>
        <label> Enter time in mins </label>
        <input
          type="number"
          defaultValue={timeSaid}
          onChange={timeChangeHandler}
        />
      </div>
    </form>
  );
};

export default Form;

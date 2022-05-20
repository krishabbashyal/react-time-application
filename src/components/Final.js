import React, { useState } from "react";
import "./Final.css";

const Final = (props) => {
  let data = props.receivedData;
  console.log(`This is the data: ${data}`);
  const [finalValue, setFinalValue] = useState(
    parseInt(props.receivedData) * Math.random()
  );
  if (props === "iwantedtheerrortobegone") {
    setFinalValue(parseInt(props.receivedData) * Math.random());
    return { finalValue };
  }
  if (data) {
    return (
      <div className="final-content">
        <h2>
          Suman should be getting on in around{" "}
          {Math.trunc(data * Math.random() * 3)} minutes
        </h2>
      </div>
    );
  }
};

export default Final;

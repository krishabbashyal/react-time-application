import React from "react";
import "./Final.css";

const Final = (props) => {
  let data = props.data;

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

import React, { useState } from "react";

function Temperature() {
  let [isTemperature, setTemperature] = useState(72);
  return (
    <div>
      <p>the temperature is {isTemperature}</p>
      <button
        onClick={() => {
          setTemperature(isTemperature++);
        }}
      >
        add temperature
      </button>
      <button
        onClick={() => {
          setTemperature(isTemperature--);
        }}
      >
        Decrease Temperature
      </button>
    </div>
  );
}

export default Temperature;

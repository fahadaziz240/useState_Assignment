import React, { useState } from "react";
import "./RoomBulb.css";
import Temperature from "./Temperature.js";

function RoomBulb() {
  let [isbulb, setBulb] = useState(true);
  return (
    <div>
      <div className={`room ${isbulb ? "on" : "off"}`}>
        <p>The light bulb {isbulb ? "on" : "off"}</p>
        <button
          onClick={() => {
            setBulb(true);
          }}
        >
          On
        </button>
        <button
          onClick={() => {
            setBulb(false);
          }}
        >
          Off
        </button>
      </div>
      <br />
      <hr />
      <div>
        <Temperature />
      </div>
    </div>
  );
}
export default RoomBulb;

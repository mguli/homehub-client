import React from "react";
import "./Accessory.css";

const Accessory = ({ accessory }) => (
  <div className="accessory">
    <h2>{accessory.name}</h2>
    <p>{accessory.id}</p>
  </div>
);

export default Accessory;

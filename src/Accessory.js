import React from "react";

const Accessory = ({ accessory }) => (
  <div>
    <h2>{accessory.name}</h2>
    <p>{accessory.id}</p>
  </div>
);

export default Accessory;

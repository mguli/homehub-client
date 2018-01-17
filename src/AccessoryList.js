import React from "react";
import Accessory from "./Accessory";

const accs = [
  { id: 1, _type: "Light", name: "Hall Light", brightnessLevel: 100 },
  {
    id: 2,
    _type: "Door",
    name: "Front Door",
    isClosed: true,
    isLocked: true
  },
  {
    id: 3,
    _type: "Thermostat",
    name: "Living Room Thermostat",
    temperature: 72
  },
  { id: 4, _type: "Outlet", name: "Kitchen Outlet 1", isOn: true }
];

const AccessoryList = () => {
  const accessoryComps = accs.map(acc => (
    <Accessory accessory={acc} key={acc.id} />
  ));
  return (
    <div>
      <h1>Accessories</h1>
      {accessoryComps}
    </div>
  );
};

export default AccessoryList;

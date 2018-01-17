import React from "react";
import Accessory from "./Accessory";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import "./AccessoryList.css";

// const accs = [
//   { id: 1, _type: "Light", name: "Hall Light", brightnessLevel: 100 },
//   {
//     id: 2,
//     _type: "Door",
//     name: "Front Door",
//     isClosed: true,
//     isLocked: true
//   },
//   {
//     id: 3,
//     _type: "Thermostat",
//     name: "Living Room Thermostat",
//     temperature: 72
//   },
//   { id: 4, _type: "Outlet", name: "Kitchen Outlet 1", isOn: true }
// ];

const AccessoryList = ({ data }) => {
  const accessories = data.accessories || [];
  const accessoryComps = accessories.map(acc => (
    <Accessory accessory={acc} key={acc.id} />
  ));
  return (
    <div>
      <h1>Accessories</h1>
      {accessoryComps}
    </div>
  );
};

const ACCESSORY_LIST_QUERY = gql`
  query getAccessories {
    accessories(offset: 0, limit: 10) {
      id
      name
      __typename
      ... on Light {
        brightnessLevel
      }
      ... on Door {
        isClosed
        isLocked
      }
      ... on Thermostat {
        temperature
      }
      ... on Outlet {
        isOn
      }
    }
  }
`;

export default graphql(ACCESSORY_LIST_QUERY)(AccessoryList);

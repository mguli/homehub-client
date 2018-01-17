import React from "react";
import Accessory from "./Accessory";
import { graphql } from "react-apollo";
import ACCESSORIES_QUERY from "./graphql-queries/accessoriesQuery";
import "./AccessoryList.css";

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

export default graphql(ACCESSORIES_QUERY)(AccessoryList);

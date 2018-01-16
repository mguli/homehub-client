import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const HubName = ({ data }) => (
  <div>
    <p>Hub: {data.system && data.system.hubname}</p>
  </div>
);

const HUBNAME_QUERY = gql`
  {
    system {
      hubname
    }
  }
`;

export default graphql(HUBNAME_QUERY)(HubName);

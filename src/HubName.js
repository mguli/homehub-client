import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const HubName = ({ hubnameQuery }) => (
  <div>
    <p>
      Hub: {hubnameQuery.system && hubnameQuery.system.hubname}
      {hubnameQuery.loading && "Loading..."}
      {hubnameQuery.error && `Error: ${hubnameQuery.error.message}`}
    </p>
  </div>
);

const HUBNAME_QUERY = gql`
  {
    system {
      hubname
    }
  }
`;

export default graphql(HUBNAME_QUERY, { name: "hubnameQuery" })(HubName);

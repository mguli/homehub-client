import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Uptime = ({ uptimeQuery }) => (
  <div>
    <p>
      Uptime: {uptimeQuery.system && uptimeQuery.system.uptime}
      {uptimeQuery.loading && "Loading..."}
      {uptimeQuery.error && `Error: ${uptimeQuery.error.message}`}
    </p>
  </div>
);

const UPTIME_QUERY = gql`
  {
    system {
      uptime
    }
  }
`;

export default graphql(UPTIME_QUERY, { name: "uptimeQuery" })(Uptime);

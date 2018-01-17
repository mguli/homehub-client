import gql from "graphql-tag";

const ACCESSORIES_QUERY = gql`
  query getAccessories {
    accessories(offset: 0, limit: 10) {
      id
      name
      __typename
      ... on Light {
        brightnessLevel
        manufacturer
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

export default ACCESSORIES_QUERY;

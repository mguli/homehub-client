import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const HUBNAME_QUERY = gql`
  {
    system {
      hubname
    }
  }
`;

class SetHubName extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Set Hub Name:{" "}
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="submit">Set</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.mutate({
      variables: {
        newname: this.state.name
      },
      update: (proxy, { data: { setHubname } }) => {
        proxy.writeQuery({
          query: HUBNAME_QUERY,
          data: { system: { hubname: this.state.name, __typename: "System" } }
        });
      }
    });
  };
}

const SET_HUBNAME_MUTATION = gql`
  mutation SetHubName($newname: String!) {
    setHubname(name: $newname)
  }
`;

export default graphql(SET_HUBNAME_MUTATION)(SetHubName);

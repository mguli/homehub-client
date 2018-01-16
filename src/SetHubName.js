import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

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
    console.log("current name:", this.state.name);
    this.props.mutate({
      variables: {
        newname: this.state.name
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

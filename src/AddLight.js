import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import ACCESSORIES_QUERY from "./graphql-queries/accessoriesQuery";

class AddLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      manufacturer: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add Light</h3>
        <ul>
          <li>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </li>
          <li>
            <label htmlFor="manufacturer">Manufacturer:</label>
            <input
              type="text"
              name="manufacturer"
              value={this.state.manufacturer}
              onChange={this.handleChange}
            />
          </li>
        </ul>
        <button type="submit">Add</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.mutate({
      variables: {
        name: this.state.name,
        manufacturer: this.state.manufacturer
      },
      update: (proxy, { data: { addLight } }) => {
        const data = proxy.readQuery({ query: ACCESSORIES_QUERY });

        data.accessories.push(addLight);
        proxy.writeQuery({
          query: ACCESSORIES_QUERY,
          data
        });
      }
    });
  };
}

const ADD_LIGHT_MUTATION = gql`
  mutation addLight($name: String!, $manufacturer: String!) {
    addLight(light: { name: $name, manufacturer: $manufacturer }) {
      id
      name
      brightnessLevel
      manufacturer
    }
  }
`;

export default graphql(ADD_LIGHT_MUTATION)(AddLight);

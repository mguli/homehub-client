import React, { Component } from "react";
import HubName from "./HubName";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to HomeHub</h1>
          <HubName />
        </header>
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;

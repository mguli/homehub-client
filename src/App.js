import React, { Component } from "react";
import HubName from "./HubName";
import SetHubName from "./SetHubName";
import Uptime from "./Uptime";
import AccessoryList from "./AccessoryList";
import AddLight from "./AddLight";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to HomeHub</h1>
          <HubName />
          <Uptime />
        </header>
        <div className="App-intro">
          <SetHubName />
          <AddLight />
          <AccessoryList />
        </div>
      </div>
    );
  }
}

export default App;

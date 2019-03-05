import React, { Component } from "react";

import Dashboard from "./dashboard/Dashboard";
import Display from "./display/Display";
import "./App.css";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
  }
  render() {
    return (
      <div className="App">
        <Display count={this.state}/>
        <Dashboard />
      </div>
    );
  }
}

export default App;

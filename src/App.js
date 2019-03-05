import React, { Component } from "react";

import Dashboard from "./dashboard/Dashboard";
import Display from "./display/Display";
import "./App.css";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  strike = e => {
    this.setState(prevState => ({
      strikes: prevState.strikes + 1
    }));
  };

  ball = e => {
    this.setState(prevState => ({
      balls: prevState.balls + 1
    }));
  };
  render() {
    return (
      <div className="App">
        <Display count={this.state} />
        <Dashboard strike={this.strike} ball={this.ball} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import Dashboard from "./dashboard/Dashboard";
import Display from "./display/Display";
import "./App.css";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  reset = () => {
    this.setState({ strikes: 0, balls: 0 });
  };

  strike = e => {
    if (this.state.strikes === 2) {
      this.reset();
    } else {
      this.setState(prevState => ({
        strikes: prevState.strikes + 1
      }));
    }
  };

  ball = e => {
    if (this.state.balls === 3) {
      this.reset();
    } else {
      this.setState(prevState => ({
        balls: prevState.balls + 1
      }));
    }
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

import React, { Component } from "react";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <button data-testid="strike-btn" onClick={this.props.strike}>
          Strike
        </button>
        <button data-testid="ball-btn" onClick={this.props.ball}>
          Ball
        </button>

        <button>Foul</button>
        <button data-testid="hit-btn" onClick={this.props.hit}>Hit</button>
      </div>
    );
  }
}

export default Dashboard;

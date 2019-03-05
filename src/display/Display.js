import React, { Component } from "react";

class Display extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Baseball!</h1>
        <p>Strikes: {this.props.count.strikes}</p>
        <p>Balls: {this.props.count.balls}</p>
      </div>
    );
  }
}

export default Display;

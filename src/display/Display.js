import React, { Component } from "react";

class Display extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Baseball!</h1>
        <p>Strikes:</p> <p data-testid="strike-count">{this.props.count.strikes}</p>
        <p>Balls:</p> <p data-testid="ball-count">{this.props.count.balls}</p>
      </div>
    );
  }
}

export default Display;

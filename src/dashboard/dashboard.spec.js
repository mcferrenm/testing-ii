import React from "react";
import { render } from "react-testing-library";
import Dashboard from "./Dashboard";
import "jest-dom/extend-expect";

describe("<Dashboard />", () => {
  it("should render buttons for strike, ball, foul, and hit", () => {
    const { getByText } = render(<Dashboard />);

    const strike = getByText(/Strike/i);
    expect(strike).toBeInTheDocument();

    const ball = getByText(/Ball/i);
    expect(ball).toBeInTheDocument();

    const foul = getByText(/Foul/i);
    expect(foul).toBeInTheDocument();

    const hit = getByText(/Hit/i);
    expect(hit).toBeInTheDocument();
  });

  
});

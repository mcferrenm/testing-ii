import React from "react";
import { render, fireEvent } from "react-testing-library";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const helpers = render(<App />);
  });

  it("should update strikes and balls when strike button clicked", () => {

    const { getByTestId } = render(<App />);

    const strikeBtn = getByTestId(/strike-btn/i);
    const ballBtn = getByTestId(/ball-btn/i);

    fireEvent.click(strikeBtn);
    fireEvent.click(ballBtn);

    expect(getByTestId(/strike-count/i).textContent).toBe("1")
    expect(getByTestId(/ball-count/i).textContent).toBe("1")
  });
});

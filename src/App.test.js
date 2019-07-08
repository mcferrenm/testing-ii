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

  it('should reset count when strikes is 3 or balls is 4', () => {
    const { getByTestId } = render(<App />);
    
    const strikeBtn = getByTestId(/strike-btn/i);
    
    fireEvent.click(strikeBtn);
    
    const strikeCount = getByTestId(/strike-count/i);
    expect(strikeCount).not.toBe("3")
    const ballCount = getByTestId(/ball-count/i);
    expect(ballCount).not.toBe("4")
  });

  it('should reset count when strikes is 3 or balls is 4', () => {
    const { getByTestId } = render(<App />);
    
    const hitBtn = getByTestId(/hit-btn/i);
    
    fireEvent.click(hitBtn);
    
    const strikeCount = getByTestId(/strike-count/i);
    expect(strikeCount.textContent).toBe("0")
    const ballCount = getByTestId(/ball-count/i);
    expect(ballCount.textContent).toBe("0")
  });
});

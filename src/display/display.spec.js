import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("<Display />", () => {
  it("should render the lables 'Balls:' and 'Strikes:'", () => {
    const count = {
      balls: 0,
      strikes: 0
    };
    const { getByText } = render(<Display count={count}/>);

    expect(getByText(/Balls:/i)).toBeInTheDocument();
    expect(getByText(/Strikes:/i)).toBeInTheDocument();
  });
});

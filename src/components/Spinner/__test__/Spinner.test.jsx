import React from "react";
import Spinner from "../Spinner";
import { render, screen } from "@testing-library/react";

it("Render Spinner", () => {
  render(<Spinner />);

  const spinner = screen.getByTestId("spinner");
  expect(spinner).toBeInTheDocument();
});

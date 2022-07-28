import React from "react";
import Footer from "../index";
import { render, screen } from "@testing-library/react";

it("Render Footer Section", () => {
  render(<Footer />);
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
  expect(footer).toMatchSnapshot();
});

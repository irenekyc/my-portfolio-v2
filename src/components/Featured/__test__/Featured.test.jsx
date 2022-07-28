import React from "react";
import Featured from "../index";
import { render, screen } from "@testing-library/react";

it("Render Featured Section", () => {
  render(<Featured />);
  const featuredSection = screen.getByTestId("featured-portfolio");
  expect(featuredSection).toBeInTheDocument();
  const featuredSectionTitle = screen.getByTestId("featured-portfolio-title");
  expect(featuredSectionTitle).toBeInTheDocument();
  const featuredSectionimage = screen.getByTestId("featured-portfolio-image");
  expect(featuredSectionimage).toBeInTheDocument();
  const featuredSectioncontent = screen.getByTestId(
    "featured-portfolio-content"
  );
  expect(featuredSectioncontent).toBeInTheDocument();
});

import React from "react";
import Hero from "../index";
import { render, screen } from "@testing-library/react";

it("Render Hero Section", () => {
  render(<Hero />);
  const hero = screen.getByTestId("hero");
  expect(hero).toBeInTheDocument();
  const heroCards = screen.getAllByTestId("hero-card");
  expect(heroCards).toHaveLength(3);
  expect(heroCards[0]).toHaveTextContent("learning hours");
  expect(heroCards[1]).toHaveTextContent("coding hours");
  expect(heroCards[2]).toHaveTextContent("coding projects");
});

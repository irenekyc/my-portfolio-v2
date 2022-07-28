import React from "react";
import NavBar from "../index";
import { render, screen, fireEvent } from "@testing-library/react";

it("Render NavBar Section", () => {
  render(<NavBar showMenu={false} />);

  const navBar = screen.getByTestId("nav-bar");
  expect(navBar).toBeInTheDocument();
  const hamburgerBtn = screen.getByTestId("hamburger-btn");
  expect(hamburgerBtn).not.toHaveClass("ikNavBar__open");
  expect(navBar).toMatchSnapshot();
});

it("Render NavBar Section - click on hamburger button", () => {
  render(<NavBar showMenu={false} />);

  const navBar = screen.getByTestId("nav-bar");
  expect(navBar).toBeInTheDocument();
  const hamburgerBtn = screen.getByTestId("hamburger-btn");
  fireEvent.click(hamburgerBtn);
  expect(hamburgerBtn).toHaveClass("ikNavBar__open");
});

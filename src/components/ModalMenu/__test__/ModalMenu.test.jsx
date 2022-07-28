import React from "react";
import ModalMenu from "../index";
import { render, screen } from "@testing-library/react";

it("Render ModalMenu Section - should not show by default", () => {
  render(<ModalMenu showMenu={false} />);

  const modalMenu = screen.getByTestId("modal-menu");
  expect(modalMenu).not.toHaveClass("ikModalMenu__active");
});

it("Render ModalMenu Section - show", () => {
  render(<ModalMenu showMenu={true} />);

  const modalMenu = screen.getByTestId("modal-menu");
  expect(modalMenu).toHaveClass("ikModalMenu__active");
  const contactDetails = screen.getAllByTestId("modal-menu-contact-list");
  expect(contactDetails).toHaveLength(4);
  expect(modalMenu).toMatchSnapshot();
});

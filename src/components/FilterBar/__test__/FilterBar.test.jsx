import React from "react";
import FilterBar from "../index";
import { render, screen, fireEvent } from "@testing-library/react";

const buttonActiveClass = "ikFilterBar__button__active";

it("Render Filter Bar", () => {
  const mockSetConditions = jest.fn();
  render(<FilterBar setConditions={mockSetConditions} />);
  const filterBarSection = screen.getByTestId("filter-bar");
  expect(filterBarSection).toBeInTheDocument();
  const filterBarOptions = screen.getAllByTestId("filter-option");
  expect(filterBarOptions).toHaveLength(9);
  const sortOptions = screen.getAllByTestId("sort-option");
  expect(sortOptions).toHaveLength(2);
});

it("Render Filter Bar - sort by latest option should be default", () => {
  const mockSetConditions = jest.fn();
  render(<FilterBar setConditions={mockSetConditions} />);
  const filterBarSection = screen.getByTestId("filter-bar");
  expect(filterBarSection).toBeInTheDocument();
  const latestOption = screen.getByText("Latest");
  expect(latestOption).toBeInTheDocument();
  expect(latestOption).toHaveClass(buttonActiveClass);
});

it("Click on filter option - the button should be active and set conditions to be called correctly", () => {
  const mockSetConditions = jest.fn();
  render(<FilterBar setConditions={mockSetConditions} />);
  const filterBarOptions = screen.getAllByTestId("filter-option");
  expect(filterBarOptions[0]).not.toHaveClass(buttonActiveClass);
  fireEvent.click(filterBarOptions[0], { bubble: true, cancellable: true });
  expect(filterBarOptions[0]).toHaveClass(buttonActiveClass);
  expect(mockSetConditions).toBeCalledWith({ filter: "Next", sort: "desc" });
});

it("Click on sort option - the button should be active and set conditions to be called correctly", () => {
  const mockSetConditions = jest.fn();
  render(<FilterBar setConditions={mockSetConditions} />);

  const earliestOption = screen.getByText("Earliest");
  expect(earliestOption).not.toHaveClass(buttonActiveClass);
  fireEvent.click(earliestOption);
  expect(earliestOption).toHaveClass(buttonActiveClass);

  expect(mockSetConditions).toBeCalledWith({ filter: null, sort: "asc" });
});

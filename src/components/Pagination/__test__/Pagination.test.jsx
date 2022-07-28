import React from "react";
import Pagination from "../index";
import { render, screen, fireEvent } from "@testing-library/react";
const mockGoToNextPage = jest.fn();
const mockGoToPrevPage = jest.fn();

it("Render Pagination Section - no button", () => {
  render(
    <Pagination
      hasNext={false}
      hasPrev={false}
      goToNextPage={mockGoToNextPage}
      goToPrevPage={mockGoToPrevPage}
    />
  );

  const paginationBar = screen.getByTestId("pagination");
  expect(paginationBar).toBeInTheDocument();
  const prevButton = screen.queryByTestId("pagination-prev");
  const nextButton = screen.queryByTestId("pagination-next");
  expect(prevButton).toBeNull();
  expect(nextButton).toBeNull();
});

it("Render Pagination Section - click on prev and next button", () => {
  render(
    <Pagination
      hasNext={true}
      hasPrev={true}
      goToNextPage={mockGoToNextPage}
      goToPrevPage={mockGoToPrevPage}
    />
  );

  const paginationBar = screen.getByTestId("pagination");
  expect(paginationBar).toBeInTheDocument();
  const prevButton = screen.queryByTestId("pagination-prev");
  const nextButton = screen.queryByTestId("pagination-next");
  expect(prevButton).not.toBeNull();
  expect(nextButton).not.toBeNull();
  fireEvent.click(prevButton);
  expect(mockGoToPrevPage).toBeCalled();
  fireEvent.click(nextButton);
  expect(mockGoToNextPage).toBeCalled();
});

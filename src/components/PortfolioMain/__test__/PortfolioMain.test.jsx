import React from "react";
import PortfolioMain from "../index";
import { render, screen } from "@testing-library/react";
import {
  mockProject,
  mockProjectListLong,
} from "../../../helper/__test__/mockdata";

const mockProjectList = [mockProject];

it("Render PortfolioMain Section - number of portfolio card should be zero", () => {
  render(<PortfolioMain projects={[]} />);

  const portfolioMain = screen.getByTestId("portfolio-main");
  expect(portfolioMain).toBeInTheDocument();
  const portfolioCards = screen.queryAllByTestId("portfolio-project-card");
  expect(portfolioCards).toHaveLength(0);
  const pagination = screen.getByTestId("pagination");
  expect(pagination).toBeInTheDocument();
});

it("Render PortfolioMain Section - number of portfolio card should be 1", () => {
  render(<PortfolioMain projects={mockProjectList} />);

  const portfolioMain = screen.getByTestId("portfolio-main");
  expect(portfolioMain).toBeInTheDocument();
  const portfolioCards = screen.queryAllByTestId("portfolio-project-card");
  expect(portfolioCards).toHaveLength(1);
  const pagination = screen.getByTestId("pagination");
  expect(pagination).toBeInTheDocument();
});

it("Render PortfolioMain Section - number of portfolio card should be 9, and has next page", () => {
  render(<PortfolioMain projects={mockProjectListLong} />);

  const portfolioMain = screen.getByTestId("portfolio-main");
  expect(portfolioMain).toBeInTheDocument();
  const portfolioCards = screen.queryAllByTestId("portfolio-project-card");
  expect(portfolioCards).toHaveLength(9);
  const pagination = screen.getByTestId("pagination");
  expect(pagination).toBeInTheDocument();
  const nextButton = screen.getByTestId("pagination-next");
  expect(nextButton).toBeInTheDocument();
});

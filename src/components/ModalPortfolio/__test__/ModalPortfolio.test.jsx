import React from "react";
import ModalPortfolio from "../index";
import { render, screen } from "@testing-library/react";
import { mockProject } from "../../../helper/__test__/mockdata";

const mockClose = jest.fn();

it("Render ModalPortfolio Section - should not show by default when project details are not passed", () => {
  render(
    <ModalPortfolio show={false} clickClose={mockClose} projectDetails={null} />
  );

  const modalPortfolio = screen.queryByTestId("modal-portfolio");
  expect(modalPortfolio).toBeNull();
});

it("Render ModalPortfolio Section - should not show when show is false", () => {
  render(
    <ModalPortfolio
      show={false}
      clickClose={mockClose}
      projectDetails={mockProject}
    />
  );

  const modalPortfolio = screen.queryByTestId("modal-portfolio");
  expect(modalPortfolio).toBeNull();
});

it("Render ModalPortfolio Section - should show when show is true, and correctly render details", () => {
  render(
    <ModalPortfolio
      show={true}
      clickClose={mockClose}
      projectDetails={mockProject}
    />
  );

  const modalPortfolio = screen.queryByTestId("modal-portfolio");
  expect(modalPortfolio).toBeInTheDocument();
  expect(modalPortfolio).toMatchSnapshot();
  const modalPortfolioTitle = screen.getByTestId("modal-portfolio-title");
  expect(modalPortfolioTitle).toHaveTextContent(mockProject.title);
  const modalPortfolioImage = screen.getByTestId("modal-portfolio-image");
  expect(modalPortfolioImage).toHaveAttribute(
    "src",
    `images/${mockProject.image}`
  );
  const modalPortfolioExcerpt = screen.getByTestId("modal-portfolio-excerpt");
  expect(modalPortfolioExcerpt).toHaveTextContent(mockProject.excerpt);
  const modalPortfolioDescription = screen.getByTestId(
    "modal-portfolio-description"
  );
  expect(modalPortfolioDescription).toHaveTextContent(
    mockProject.fullDescription
  );
  const modalPortfolioProjectUrl = screen.queryByTestId(
    "modal-portfolio-project-url"
  );
  expect(modalPortfolioProjectUrl).toBeNull();
  const modalPrtoflioGithubUrl = screen.queryByTestId("modal-portfolio-github");
  expect(modalPrtoflioGithubUrl).toHaveAttribute("href", mockProject.github);
});

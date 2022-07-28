import React from "react";
import ProjectCard from "../index";
import { render, screen, fireEvent } from "@testing-library/react";
import { mockProject } from "../../../helper/__test__/mockdata";

const mockOpenModal = jest.fn();

it("Render ProjectCard", () => {
  render(<ProjectCard data={mockProject} onClickOpenDetails={mockOpenModal} />);

  const projectCard = screen.getByTestId("portfolio-project-card");
  expect(projectCard).toBeInTheDocument();

  const projectTitle = screen.getByTestId("project-card-title");
  expect(projectTitle).toHaveTextContent(mockProject.title);
});

it("Render ProjectCard - click on learn more button", () => {
  render(<ProjectCard data={mockProject} onClickOpenDetails={mockOpenModal} />);

  const projectCard = screen.getByTestId("portfolio-project-card");
  expect(projectCard).toBeInTheDocument();

  const learnMoreButton = screen.getByTestId("project-card-learn-more");
  expect(learnMoreButton).toBeInTheDocument();
  fireEvent.click(learnMoreButton);
  expect(mockOpenModal).toBeCalledWith(mockProject);
});

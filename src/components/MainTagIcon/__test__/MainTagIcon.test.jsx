import React from "react";
import MainTagIcon from "../index";
import { render, screen } from "@testing-library/react";

it("Render MainTagIcon Section - no tag should be rendered", () => {
  render(
    <div data-testid="main-tag-container">
      <MainTagIcon tag="" />
    </div>
  );
  const container = screen.getByTestId("main-tag-container");
  expect(container).toBeEmpty();
});

it("Render MainTagIcon Section - tag should be css", () => {
  render(
    <div data-testid="main-tag-container">
      <MainTagIcon tag="CSS" />
    </div>
  );
  const cssIcon = screen.getByTestId("css-icon");
  expect(cssIcon).toBeInTheDocument();
});

it("Render MainTagIcon Section - tag should be scss", () => {
  render(
    <div data-testid="main-tag-container">
      <MainTagIcon tag="sCSs" />
    </div>
  );
  const scssIcon = screen.getByTestId("scss-icon");
  expect(scssIcon).toBeInTheDocument();
});

it("Render MainTagIcon Section - tag should be js", () => {
  render(
    <div data-testid="main-tag-container">
      <MainTagIcon tag="js" />
    </div>
  );
  const jsIcon = screen.getByTestId("js-icon");
  expect(jsIcon).toBeInTheDocument();
});

it("Render MainTagIcon Section - tag should be react", () => {
  render(
    <div data-testid="main-tag-container">
      <MainTagIcon tag="React" />
    </div>
  );
  const reactIcon = screen.getByTestId("react-icon");
  expect(reactIcon).toBeInTheDocument();
});

it("Render MainTagIcon Section - tag should be Node", () => {
  render(
    <div data-testid="main-tag-container">
      <MainTagIcon tag="Node" />
    </div>
  );
  const NodeIcon = screen.getByTestId("node-icon");
  expect(NodeIcon).toBeInTheDocument();
});

it("Render MainTagIcon Section - tag should be next", () => {
  render(
    <div data-testid="main-tag-container">
      <MainTagIcon tag="Next JS" />
    </div>
  );
  const nextIcon = screen.getByTestId("next-icon");
  expect(nextIcon).toBeInTheDocument();
});

it("Render MainTagIcon Section - tag should be webflow", () => {
  render(
    <div data-testid="main-tag-container">
      <MainTagIcon tag="webflow" />
    </div>
  );
  const webflowIcon = screen.getByTestId("webflow-icon");
  expect(webflowIcon).toBeInTheDocument();
});

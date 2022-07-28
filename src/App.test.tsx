import React from "react";
import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mockProjectListLong } from "./helper/__test__/mockdata";
import { act } from "react-dom/test-utils";

const mockState = {
  projects: {
    projects: [],
    error: false,
    loading: false,
  },
};

const mockStateWithData = {
  projects: {
    projects: mockProjectListLong,
    error: false,
    loading: false,
  },
};

const mockStore = configureMockStore([thunk])(mockState);

it("Render App - render all sections ", () => {
  render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );

  const navBar = screen.getByTestId("nav-bar");
  const hero = screen.getByTestId("hero");
  const featured = screen.getByTestId("featured-portfolio");
  const filterBar = screen.getByTestId("filter-bar");
  const portfolioMain = screen.getByTestId("portfolio-main");
  const footer = screen.getByTestId("footer");
  expect(navBar).toBeInTheDocument();
  expect(hero).toBeInTheDocument();
  expect(featured).toBeInTheDocument();
  expect(filterBar).toBeInTheDocument();
  expect(portfolioMain).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});

const mockStoreWithData = configureMockStore([thunk])(mockStateWithData);
it("Render App - render all sections and click on filter", () => {
  render(
    <Provider store={mockStoreWithData}>
      <App />
    </Provider>
  );

  const projectCards = screen.queryAllByTestId("portfolio-project-card");
  expect(projectCards).toHaveLength(9);
  const nextFilterButton = screen.queryAllByTestId("filter-option")[0];
  act(() => {
    fireEvent.click(nextFilterButton);
  });

  const updatedProjectCards = screen.queryAllByTestId("portfolio-project-card");
  expect(updatedProjectCards).toHaveLength(1);
});

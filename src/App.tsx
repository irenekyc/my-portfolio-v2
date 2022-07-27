import React, { Fragment, useEffect, useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured";
import FilterBar from "./components/FilterBar";
import PortfolioMain from "./components/PortfolioMain/PortfolioMain";

import Footer from "./components/Footer";
import { loadProjects } from "./redux/projects/actions";
import { useAppDispatch, useAppSelector } from "./hooks";
import { Project } from "./typings/Project";
import { RootState } from "./store";
import { SORT_LATEST } from "./constants";

const App = () => {
  const [projectList, setProjectList] = useState<Array<Project>>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [sort, setSort] = useState<string>("desc");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProjects());
    window.scroll(0, 0);
  }, [dispatch]);

  const projects: Array<Project> = useAppSelector(
    (state: RootState) => state.projects.projects
  );

  useEffect(() => {
    if (projects.length === 0) return;
    let projectArr = [...projects];
    if (filter) {
      projectArr = projectArr.filter((project: Project) =>
        project.tools.includes(filter)
      );
    }
    if (sort === SORT_LATEST) {
      projectArr = projectArr.sort(
        (a: Project, b: Project) => b.projectDate - a.projectDate
      );
    } else {
      projectArr = projectArr.sort(
        (a: Project, b: Project) => a.projectDate - b.projectDate
      );
    }

    setProjectList(projectArr);
  }, [projects, filter, sort]);

  const onSetFilter = ({
    filter,
    sort,
  }: {
    filter: string | null;
    sort: string;
  }) => {
    setFilter(filter);
    setSort(sort);
  };

  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Featured />
      <FilterBar setConditions={onSetFilter} />
      <PortfolioMain projects={projectList} />
      <Footer />
    </Fragment>
  );
};

export default App;

import React, { Fragment, useEffect } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured";
import FilterBar from "./components/FilterBar";
import PortfolioMain from "./components/PortfolioMain/PortfolioMain";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import { loadProjects } from "./redux/projects/actions";
import { useAppDispatch } from "./hooks";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadProjects());
    window.scroll(0, 0);
  }, [dispatch]);

  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Featured />
      <FilterBar />
      <Pagination />
      <PortfolioMain />
      <Pagination />
      <Footer />
    </Fragment>
  );
};

export default App;

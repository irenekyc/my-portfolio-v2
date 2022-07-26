import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./actions/data";
import "./App.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured";
import Modal from "./layout/Modal";
import FilterBar from "./components/FilterBar";
import PortfolioMain from "./components/PortfolioMain/PortfolioMain";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
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
      <Modal />
    </Fragment>
  );
};

export default App;

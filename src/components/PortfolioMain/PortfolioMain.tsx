import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import ProjectCard from "../ProjectCard/ProjectCard";
import Spinner from "../Spinner/Spinner";

const PortfolioMain = () => {
  const projects = useSelector((state: RootStateOrAny) => state.data.all);

  return (
    <section className="portfolio-container">
      {projects !== null ? (
        projects.map((p: any) => {
          return <ProjectCard key={p._id} data={p} />;
        })
      ) : (
        <Spinner />
      )}
    </section>
  );
};

export default PortfolioMain;

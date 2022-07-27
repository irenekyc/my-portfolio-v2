import React from "react";

import ProjectCard from "../ProjectCard/ProjectCard";
import Spinner from "../Spinner/Spinner";
import { Project } from "../../typings/Project";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";

const PortfolioMain = () => {
  const projects: Project[] = useAppSelector(
    (state: RootState) => state.projects.projects
  );

  return (
    <section className="portfolio-container">
      {projects !== null ? (
        projects.map((p: Project) => {
          return <ProjectCard key={p.title} data={p} />;
        })
      ) : (
        <Spinner />
      )}
    </section>
  );
};

export default PortfolioMain;

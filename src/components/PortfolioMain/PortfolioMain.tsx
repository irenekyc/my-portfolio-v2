import React, { useState } from "react";

import ProjectCard from "../ProjectCard/ProjectCard";
import Spinner from "../Spinner/Spinner";
import { Project } from "../../typings/Project";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import ModalPortfolio from "../ModalPortfolio";

const PortfolioMain = () => {
  const projects: Project[] = useAppSelector(
    (state: RootState) => state.projects.projects
  );

  const [openDetailsModal, setOpenDetailsModal] = useState<Project | null>(
    null
  );

  return (
    <section className="portfolio-container">
      <ModalPortfolio
        show={openDetailsModal !== null}
        projectDetails={openDetailsModal}
        clickClose={() => setOpenDetailsModal(null)}
      />
      {projects.length > 0 ? (
        projects.map((p: Project) => {
          return (
            <ProjectCard
              key={p.title}
              data={p}
              onClickOpenDetails={(project) => setOpenDetailsModal(project)}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </section>
  );
};

export default PortfolioMain;

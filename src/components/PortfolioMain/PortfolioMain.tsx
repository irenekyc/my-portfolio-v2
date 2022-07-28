import React, { useState, FunctionComponent, useEffect } from "react";

import ProjectCard from "../ProjectCard/ProjectCard";
import { Project } from "../../typings/Project";

import ModalPortfolio from "../ModalPortfolio";
import styles from "./PortfolioMain.module.scss";
import Pagination from "../Pagination";
import { NUM_PER_PAGE } from "../../constants";

interface PortfolioMainProps {
  projects: Array<Project>;
}

const PortfolioMain: FunctionComponent<PortfolioMainProps> = ({
  projects,
}: PortfolioMainProps) => {
  const [openDetailsModal, setOpenDetailsModal] = useState<Project | null>(
    null
  );
  const [page, setPage] = useState<number>(1);
  const [projectList, setProjectList] = useState<Array<Project>>(projects);
  const [currentPageProjects, setCurrentPageProjects] = useState<
    Array<Project>
  >([]);

  useEffect(() => {
    setProjectList(projects);
    setPage(1);
  }, [projects]);

  const goToPrevPage = () => {
    if (page === 0) return;
    setPage(page - 1);
    // scroll to top
  };

  const goToNextPage = () => {
    setPage(page + 1);
    // scroll to top
  };

  useEffect(() => {
    if (projectList.length === 0) {
      setCurrentPageProjects([]);
    }
    setCurrentPageProjects(
      projectList.slice((page - 1) * NUM_PER_PAGE, page * NUM_PER_PAGE)
    );
  }, [projectList, page]);

  return (
    <>
      <section className={styles.ikPortfolioMain} data-testid="portfolio-main">
        <ModalPortfolio
          show={openDetailsModal !== null}
          projectDetails={openDetailsModal}
          clickClose={() => setOpenDetailsModal(null)}
        />
        {currentPageProjects.map((p: Project) => {
          return (
            <ProjectCard
              key={p.title}
              data={p}
              onClickOpenDetails={(project) => setOpenDetailsModal(project)}
            />
          );
        })}
      </section>
      <Pagination
        hasPrev={page > 1}
        hasNext={Math.ceil(projectList.length / NUM_PER_PAGE) > page}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
      />
    </>
  );
};

export default PortfolioMain;

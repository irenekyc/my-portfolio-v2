import React, { useState, useEffect, FunctionComponent } from "react";
import MainTagIcon from "../MainTagIcon/MainTagIcon";
import { CSSTransition } from "react-transition-group";
import { Project } from "../../typings/Project";

interface ProjectCardProps {
  data: Project;
  onClickOpenDetails: (projectDetails: Project) => void;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  data,
  onClickOpenDetails,
}: ProjectCardProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (data) {
      setReady(true);
    } else if (data == null) {
      setReady(false);
    }
  }, [data]);

  return (
    <CSSTransition in={ready} timeout={500} unmountOnExit classNames="fadeIn">
      <div className="portfolio-card">
        <div className="portfolio-card-heading">
          <div className="portfolio-card-heading-main">
            {data.mainTag.map((tag) => (
              <MainTagIcon tag={tag} key={`${data.title}__${tag}`} />
            ))}
          </div>
          <div className="portfolio-card-heading-links">
            <a href={data.projectUrl} rel="noopener noreferrer" target="_blank">
              <i className="fas fa-globe"></i>
            </a>
            <a href={data.github} rel="noopener noreferrer" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-card-title">
          <h1>{data.title}</h1>
        </div>
        <div className="portfolio-card-image">
          <img src={`images/${data.image}`} alt="" />
        </div>
        <div className="portoflio-card-content">
          <p>{data.excerpt}</p>
        </div>
        <div className="portfolio-card-learn-more">
          <button onClick={() => onClickOpenDetails(data)} id={data.title}>
            {" "}
            Learn more
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ProjectCard;

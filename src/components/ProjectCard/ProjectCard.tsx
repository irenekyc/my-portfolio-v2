import React, { useState, useEffect, FunctionComponent } from "react";
import MainTagIcon from "../MainTagIcon/MainTagIcon";
import { CSSTransition } from "react-transition-group";
import { Project } from "../../typings/Project";
import styles from "./ProjectCard.module.scss";

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
      <div
        className={styles.ikProjectCard__container}
        data-testid="portfolio-project-card"
      >
        <div className={styles.ikProjectCard__heading}>
          <div className={styles.ikProjectCard__heading__tags}>
            {data.mainTag.map((tag) => (
              <MainTagIcon tag={tag} key={`${data.title}__${tag}`} />
            ))}
          </div>
          <div className={styles.ikProjectCard__heading__links}>
            {data.projectUrl && (
              <a
                href={data.projectUrl}
                rel="noopener noreferrer"
                target="_blank"
                data-testid="project-card-project-url"
              >
                <i className="fas fa-globe"></i>
              </a>
            )}
            {data.github && (
              <a
                href={data.github}
                rel="noopener noreferrer"
                target="_blank"
                data-testid="project-card-github"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
        <div className={styles.ikProjectCard__title__div}>
          <h2
            className={styles.ikProjectCard__title}
            data-testid="project-card-title"
          >
            {data.title}
          </h2>
        </div>

        <div className={styles.ikProjectCard__image}>
          <img
            src={`images/${data.image}`}
            alt=""
            data-testid="project-card-image"
          />
        </div>
        <div
          className={styles.ikProjectCard__excerpt}
          data-testid="project-card-excerpt"
        >
          <p>{data.excerpt}</p>
        </div>
        <div>
          <button
            className={styles.ikProjectCard__learnMore}
            onClick={() => onClickOpenDetails(data)}
            id={data.title}
            data-testid="project-card-learn-more"
          >
            {" "}
            Learn more
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ProjectCard;

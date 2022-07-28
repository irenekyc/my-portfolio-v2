import React, { FunctionComponent } from "react";
import IKModal from "../../layout/Modal";
import { Project } from "../../typings/Project";
import Modal from "react-bootstrap/Modal";
import styles from "./ModalPortfolio.module.scss";

interface ModalPortfolioProps {
  show: boolean;
  clickClose: () => void;
  projectDetails: Project | null;
}

const ModalPortfolio: FunctionComponent<ModalPortfolioProps> = ({
  show,
  clickClose,
  projectDetails,
}: ModalPortfolioProps) => {
  if (!projectDetails) return <></>;
  return (
    <IKModal
      show={show}
      onHide={clickClose}
      dialogClassName={styles.ikModal__dialog}
      contentClassName={styles.ikModal__content}
      size="xl"
      data-testid="modal-portfolio"
    >
      <Modal.Header
        closeButton
        bsPrefix={styles.ikModal__header}
        closeVariant="white"
      >
        <h2
          className={styles.ikModal__title}
          data-testid="modal-portfolio-title"
        >
          {projectDetails.title}
        </h2>{" "}
      </Modal.Header>
      <Modal.Body>
        <div className={styles.ikModal__image}>
          <img
            src={`images/${projectDetails.image}`}
            alt={projectDetails.title}
            data-testid="modal-portfolio-image"
          />
        </div>
        <div className={styles.ikModal__descriptions}>
          <p data-testid="modal-portfolio-excerpt">{projectDetails.excerpt}</p>
          <p data-testid="modal-portfolio-description">
            {projectDetails.fullDescription}
          </p>
        </div>
        <div className={styles.ikModal__tools}>
          <h4> Tools & Libraries </h4>

          <p>{projectDetails.tools.join(", ")}</p>
        </div>
        <div className="links">
          {projectDetails.projectUrl && (
            <a
              className={styles.ikModal__button}
              href={projectDetails.projectUrl}
              rel="noopener noreferrer"
              target="_blank"
              data-testid="modal-portfolio-project-url"
            >
              {" "}
              <i className="fas fa-globe"></i> - Live Site
            </a>
          )}
          {projectDetails.github && (
            <a
              className={styles.ikModal__button}
              href={projectDetails.github}
              rel="noopener noreferrer"
              target="_blank"
              data-testid="modal-portfolio-github"
            >
              <i className="fab fa-github"></i> - Code
            </a>
          )}
        </div>
      </Modal.Body>
    </IKModal>
  );
};

export default ModalPortfolio;

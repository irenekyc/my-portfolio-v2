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
    >
      <Modal.Header
        closeButton
        bsPrefix={styles.ikModal__header}
        closeVariant="white"
      >
        <h2 className={styles.ikModal__title}>{projectDetails.title}</h2>{" "}
      </Modal.Header>
      <Modal.Body>
        <div className={styles.ikModal__image}>
          <img
            src={`images/${projectDetails.image}`}
            alt={projectDetails.title}
          />
        </div>
        <div className={styles.ikModal__descriptions}>
          <p>{projectDetails.excerpt}</p>
          <p>{projectDetails.fullDescription}</p>
        </div>
        <div className={styles.ikModal__tools}>
          <h4> Tools & Libraries </h4>

          <p>{projectDetails.tools.join(", ")}</p>
        </div>
        <div className="links">
          <a
            className={styles.ikModal__button}
            href={projectDetails.projectUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            <i className="fas fa-globe"></i> - Live Site
          </a>
          <a
            className={styles.ikModal__button}
            href={projectDetails.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i> - Code
          </a>
        </div>
      </Modal.Body>
    </IKModal>
  );
};

export default ModalPortfolio;

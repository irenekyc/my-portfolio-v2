import React, { FunctionComponent } from "react";
import styles from "./ModalMenu.module.scss";

interface ModalMenuProps {
  showMenu: boolean;
}

const ModalMenu: FunctionComponent<ModalMenuProps> = ({
  showMenu,
}: ModalMenuProps) => {
  return (
    <section
      className={`${styles.ikModalMenu__container} ${
        showMenu ? styles.ikModalMenu__active : ""
      }`}
    >
      <div className={styles.ikModalMenu}>
        <div className={styles.ikModalMenu__about}>
          <div className={styles.ikModalMenu__about__image}>
            <img
              src="images/profile-thumbnail-2.jpg"
              alt="Irene K web developer"
            />
          </div>
          <h2> Irene K.</h2>
          <p> Web Developer</p>
        </div>
        <div className={styles.ikModalMenu__contact}>
          <ul>
            <li>
              <a
                href="https://irenekyc.github.io/irene-k/"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.ikModalMenu__link}
              >
                My Website
              </a>
            </li>
            <li>
              <a
                href="https://github.com/irenekyc"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.ikModalMenu__link}
              >
                {" "}
                Github
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/10QU9exsCAFiL1P2sM-ljihuGE-cfCeIV/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.ikModalMenu__link}
              >
                {" "}
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/irene-chow-352662a8/"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.ikModalMenu__link}
              >
                {" "}
                LinkedIn{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ModalMenu;

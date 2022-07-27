import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import ModalMenu from "../ModalMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav className={styles.ikNavBar}>
        <h1> Irene K. </h1>
        <div className={styles.ikNavBar__hamburger__div}>
          <label
            htmlFor="toggle-menu"
            className={`${isOpen ? styles.ikNavBar__open : ""} ${
              styles.ikNavBar__hamburger__button
            }`}
          >
            <input
              type="checkbox"
              value="open"
              id="toggle-menu"
              onClick={() => setIsOpen(!isOpen)}
            />
            <div className={styles.ikNavBar__hamburger__button__line}></div>
            <div className={styles.ikNavBar__hamburger__button__line}></div>
            <div className={styles.ikNavBar__hamburger__button__line}></div>
          </label>
        </div>
      </nav>
      {<ModalMenu showMenu={isOpen} />}
    </>
  );
};

export default NavBar;

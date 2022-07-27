import React from "react";

import ModalMenu from "../components/ModalMenu/ModalMenu";
import ModalPortfolio from "../components/ModalPortfolio/ModalPortfolio";
const Modal = () => {
  const isPortfolio = false;
  const isMenu = false;

  let openClass = "";
  if (isPortfolio) {
    openClass = "show-portfolio";
  } else if (isMenu) {
    openClass = "show-menu";
  }

  return (
    <section className={`modal ${openClass}`} id="modal">
      <ModalMenu />
      <ModalPortfolio />
    </section>
  );
};

export default Modal;

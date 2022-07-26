import React from "react";
import { useSelector } from "react-redux";
import ModalMenu from "../components/ModalMenu/ModalMenu";
import ModalPortfolio from "../components/ModalPortfolio/ModalPortfolio";
const Modal = () => {
  const isPortfolio = useSelector((state) => state.modal.portfolio);
  const isMenu = useSelector((state) => state.modal.menu);
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

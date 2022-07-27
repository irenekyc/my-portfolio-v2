import React from "react";

const NavBar = () => {
  const isOpen = false;

  let btnClass = "";
  if (isOpen) {
    btnClass = "active";
  } else {
    btnClass = "";
  }
  return (
    <nav>
      <h1> Irene K. </h1>
      <div className="btn-hamburger-outer">
        <label htmlFor="toggle-menu" className={`btn-hamburger ${btnClass}`}>
          <input type="checkbox" value="open" id="toggle-menu" />
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </label>
      </div>
    </nav>
  );
};

export default NavBar;

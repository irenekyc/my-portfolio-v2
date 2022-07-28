import React from "react";
import style from "./spinner.module.css";

const Spinner = () => {
  return (
    <div className={style.loader} data-testid="spinner">
      Loading...
    </div>
  );
};
export default Spinner;

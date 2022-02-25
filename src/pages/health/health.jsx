import React from "react";
import styles from "./health.module.scss";
// import Login from "components/login/loginComp";
import Ailments from "components/Health/ailments";

function Health() {
  return (
    <>
      <div className="row">
        <Ailments />
      </div>
    </>
  );
}

export default Health;

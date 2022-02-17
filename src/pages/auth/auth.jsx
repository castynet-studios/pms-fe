import React from "react";
import styles from "./auth.module.scss";
import Login from "components/login/loginComp";
import Signature from "components/Signature/signature";

function Auth() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.innerdiv}>
          <Login />
        </div>
        <Signature />
      </div>
    </>
  );
}

export default Auth;

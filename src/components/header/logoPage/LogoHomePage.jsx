import React from "react";
import { Link } from "react-router-dom";
import styles from "./LogoHomePage.module.css";

const LogoHomePage = () => {
  return (
    <>
      <Link to="/">
        <img
          className={styles.imgLogo}
          width={103}
          height={39}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt=""
        />
      </Link>
    </>
  );
};

export default LogoHomePage;

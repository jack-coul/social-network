import React from "react";
import { Link } from "react-router-dom";
import styles from "./RibbonPage.module.css";

const RibbonPage = () => {
  return (
    <div className={styles.ribbonPage}>
      <Link to="/instafeed">
        <img
          width={24}
          height={24}
          src="https://cdn-icons-png.flaticon.com/512/709/709537.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default RibbonPage;

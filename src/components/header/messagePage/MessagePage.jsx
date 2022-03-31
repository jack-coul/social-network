import React from "react";
import { Link } from "react-router-dom";
import styles from "./MessagePage.module.css";

const MessagePage = () => {
  return (
    <div className={styles.messageWrapper}>
      <div className={styles.numberOfMessages}>0</div>
      <Link to="/messages">
        <img
          width={24}
          height={24}
          src="https://cdn-icons-png.flaticon.com/512/2983/2983788.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default MessagePage;

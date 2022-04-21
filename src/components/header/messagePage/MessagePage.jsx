import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./MessagePage.module.css";

const MessagePage = () => {
  const { message } = useSelector((state) => state.message);
  return (
    <div className={styles.messageWrapper}>
      <div className={styles.numberOfMessages}>{message.length}</div>
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

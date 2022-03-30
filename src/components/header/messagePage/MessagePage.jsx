import React from "react";
import styles from "./MessagePage.module.css";

const MessagePage = () => {
  return (
    <div className={styles.messageWrapper}>
        <div className={styles.numberOfMessages}>0</div>
      <img
        width={24}
        height={24}
        src="https://cdn-icons-png.flaticon.com/512/2983/2983788.png"
        alt=""
      />
    </div>
  );
};

export default MessagePage;

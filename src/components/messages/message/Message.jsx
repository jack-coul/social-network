import React from "react";
import styles from "./../Messages.module.css";

const Message = () => {
  return (
    <div className={styles.userSendWrapper}>
      <div className={styles.userAvatar}>
        <img
          width={37}
          height={37}
          src="https://img9.floraexpress.ru/img/products/4019_320.jpg"
          alt=""
        />
      </div>
      <div className={styles.messagesSend}>
        Чудесный день Нынче sadadasdadasdasdasdasd
      </div>
    </div>
  );
};

export default Message;

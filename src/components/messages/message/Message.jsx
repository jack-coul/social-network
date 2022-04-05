import React from "react";
import styles from "./../Messages.module.css";
import {format} from "timeago.js"

const Message = ({message, userId}) => {
  
  return (
    <div className={message.sender === userId? styles.userRecWrapper: styles.userSendWrapper}>
      <div className={styles.userAvatar}>
        <img
          width={37}
          height={37}
          src="https://img9.floraexpress.ru/img/products/4019_320.jpg"
          alt=""
        />
      </div>
      <div className={styles.messagesSend}>
        {message.text}
        <div>{format(message.createdAt)}</div>

      </div>
    </div>
  );
};

export default Message;

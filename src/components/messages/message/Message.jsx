import React from "react";
import styles from "./../Messages.module.css";
import {format} from "timeago.js"

const Message = ({message, userId}) => {
  
  return (
    <div className={message.sender._id === userId? styles.userRecWrapper: styles.userSendWrapper}>
      <div className={styles.userAvatar}>
        <img
          width={37}
          height={37}
          src={`http://localhost:4000/${message.sender?.avatar}`}
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

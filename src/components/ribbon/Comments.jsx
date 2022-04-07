import React from "react";
import styles from "./Ribbon.module.css";

const Comments = ({ comment }) => {
  const port = "http://localhost:4000/";

  const avatar = port + comment.user.avatar;

  console.log(avatar);
  return (
    <div>
      <div className={styles.comments}>
        <span>
          <img width={16} src={comment} alt="" />
        </span>
        <div className={styles.userNickName}>
          <div className={styles.userImg}>
            <img width={24} height={24} src={avatar} alt="Аватарка юзера" />
          </div>
          <div className={styles.userLogin}>{comment.user.login}:</div>
          <div className={styles.userComment}>{comment.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Comments;

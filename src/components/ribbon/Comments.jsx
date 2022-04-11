import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment } from "../../redux/features/comments";
import styles from "./Ribbon.module.css";

const Comments = ({ comment, user }) => {
  const dispatch = useDispatch();
  const port = "http://localhost:4000/";

  const avatar = comment.user.avatar
    ? port + comment.user.avatar
    : port + user.avatar;
  const login = comment.user.login ? comment.user.login : user.login;

  const handleDeleteComment = (id, admin) => {
    dispatch(deleteComment(id, admin));
  };

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
          <Link
            to={`/one/user/${comment.user._id}`}
            className={styles.userLogin}
          >
            {login}:
          </Link>
          <div>
            <div className={styles.userComment}>{comment.text}</div>
            {user?.role === "admin" ||
              (comment?.user?._id === user?._id && (
                <div
                  onClick={() => handleDeleteComment(comment._id, user?.role)}
                >
                  x
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;

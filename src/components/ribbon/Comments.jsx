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
          <Link to={`/one/user/${comment.user._id}`}
            className={styles.userLogin}>
            {login}:
          </Link>
          <div className={styles.userComment}>
            <div>{comment.text}</div>
            {user?.role === "admin" ||
              (comment?.user?._id === user?._id && (
                <div className={styles.commentDelete} onClick={() => handleDeleteComment(comment._id, user?.role)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="cancel_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="cancel_24__cancel_24"><path id="cancel_24__Bounds" d="M0 0h24v24H0z"></path><path d="M18.3 5.7a.99.99 0 00-1.4 0L12 10.6 7.1 5.7a.99.99 0 00-1.4 1.4l4.9 4.9-4.9 4.9a.99.99 0 001.4 1.4l4.9-4.9 4.9 4.9a.99.99 0 001.4-1.4L13.4 12l4.9-4.9a.99.99 0 000-1.4z" id="cancel_24__Mask" fill="currentColor"></path></g></g></svg>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;

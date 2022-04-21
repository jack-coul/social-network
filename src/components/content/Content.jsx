import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addComment, deleteComment } from "../../redux/features/comments";
import { addLike, removeLike } from "../../redux/features/posts";
import styles from "./Content.module.css";
import Logo from "./forever.png";

const Content = ({ handleDeletePost, comments, setWindow, post, img, host, user }) => {
  const userId = useSelector((state) => state.application.id);
  const [text, setText] = React.useState("");
  const liked = post.likes.find((post) => post._id === userId);
  const [like, setLike] = React.useState(!!liked);
  const [likesCount, setLikesCount] = useState(post.likes.length);

  const hundleGetCommentText = (e) => {
    setText(e.target.value);
  };

  const dispatch = useDispatch();

  const hundleAddComments = () => {
    dispatch(addComment(text, post._id));
  };

  const hundleCloseWindow = () => {
    setWindow(false);
  };

  const handleDeleteComment = (id, admin) => {
    dispatch(deleteComment(id, admin));
  };
  const handlePostLike = () => {
    if (like) {
      dispatch(removeLike(post._id));
      setLike(false);
      setLikesCount(likesCount - 1);
    } else {
      setLike(true);
      dispatch(addLike(post._id));
      setLikesCount(likesCount + 1);
    }
  };
  const imgUser = post.user.avatar ? post.user.avatar : user.avatar;
  const avatar = host + imgUser;
  const login = post.user.login ? post.user.login : user.login;

  const image = host + img;

  return (
    <div className={styles.content}>
      <div className={styles.contentMedia}>
        <div className={styles.mediaWrap}>
          <img src={image} alt="content pictur" />
        </div>
      </div>
      <div className={styles.contentComments}>
        <div className={styles.commentsHeader}>
          <div className={styles.commentsHeaderTitle}>
            <div className={styles.commentsHeaderImg}>
              <img src={avatar} alt="user imag" />
            </div>
            <div className={styles.commentsHeaderUserTitle}>
              <div className={styles.userLogin}>{login}</div>
            </div>
            <button onClick={hundleCloseWindow} className={styles.buttonClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="cancel_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="cancel_24__cancel_24"><path id="cancel_24__Bounds" d="M0 0h24v24H0z"></path><path d="M18.3 5.7a.99.99 0 00-1.4 0L12 10.6 7.1 5.7a.99.99 0 00-1.4 1.4l4.9 4.9-4.9 4.9a.99.99 0 001.4 1.4l4.9-4.9 4.9 4.9a.99.99 0 001.4-1.4L13.4 12l4.9-4.9a.99.99 0 000-1.4z" id="cancel_24__Mask" fill="currentColor"></path></g></g></svg>
            </button>
          </div>
          <div className={styles.postText}>{post.text}</div>
        </div>
        <div className={styles.mainComments}>
          {comments.map((comment) => {
            const avatar = comment.user.avatar
              ? host + comment.user.avatar
              : host + user.avatar;
            const login = comment.user.login ? comment.user.login : user.login;
            return (
              <div className={styles.mainCommentsShow}>
                <div className={styles.mainCommentsUserLogo}>
                  <img src={avatar} alt="user Logo" />
                </div>
                <div className={styles.userInfoMain}>
                  <div className={styles.userInfo}>
                    <Link
                      to={`/one/user/${comment.user._id}`}
                      className={styles.userName}
                    >
                      {login}
                    </Link>
                    <div className={styles.userComment}>
                      <div>{comment.text}</div>
                      {user?.role === "admin" ||
                        (comment?.user._id === user?._id && (
                          <div className={styles.userCommentButton}
                            onClick={() => handleDeleteComment(comment._id, user?.role)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="cancel_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="cancel_24__cancel_24"><path id="cancel_24__Bounds" d="M0 0h24v24H0z"></path><path d="M18.3 5.7a.99.99 0 00-1.4 0L12 10.6 7.1 5.7a.99.99 0 00-1.4 1.4l4.9 4.9-4.9 4.9a.99.99 0 001.4 1.4l4.9-4.9 4.9 4.9a.99.99 0 001.4-1.4L13.4 12l4.9-4.9a.99.99 0 000-1.4z" id="cancel_24__Mask" fill="currentColor"></path></g></g></svg>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.mainCommentButtons}>
          <div className={styles.mainButtons}>
            <div
              style={{ cursor: "pointer" }}
              onClick={handlePostLike}
              className={styles.likeButton}
            >
              {like ? (
                <svg
                  aria-label="Не нравится"
                  class="_8-yf5 "
                  color="#ed4956"
                  fill="#ed4956"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              ) : (
                <svg
                  aria-label="Нравится"
                  class="_8-yf5 "
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                </svg>
              )}
            </div>
          </div>
        </div>
        <div className={styles.mainLike}>
          <div className={styles.likeCount}>
            <div>Нравится</div>
            <div>{likesCount}</div>
          </div>
        </div>
        <div>
          <div className={styles.commentForm}>
            <div className={styles.commentInput}>
              <input
                onChange={hundleGetCommentText}
                value={text}
                name=""
                id=""
                placeholder="Добавьте комментарий..."
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className={styles.commentSend}>
              <button onClick={hundleAddComments}>Опубликовать</button>
            </div>
          </div>
          {user?._id === post?.user?._id && (
          <div className={styles.postDelete} onClick={() => handleDeletePost(post._id)}>
            {/* <b>Удалить пост</b> */}
            <img src={Logo} alt="deltepicture" title="Удалить пост"/>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Content;

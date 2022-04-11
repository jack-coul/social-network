import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Ribbon.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Logo from "../Images/user.png";
import { getUser, getUserOne } from "../../redux/features/application";

import { addLike, deletePost, removeLike } from "../../redux/features/posts";
import Comments from "./Comments";
import { addComment, getComments } from "../../redux/features/comments";
import { Link } from "react-router-dom";

const Ribbon = ({ post, loadingPosts, postLikes }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments());
    dispatch(getUser());
  }, [dispatch]);

  const { id, user } = useSelector((state) => state.application);

  const liked = postLikes.find((post) => post._id === id);

  const host = "http://localhost:4000/";

  const comments = useSelector((state) => state.comments.comments);
  const [showComments, setShowComments] = useState(false);
  const [savePost, setSavePost] = useState(false);
  const [likePost, setLikePost] = useState(!!liked);
  const [text, setText] = useState();
  const [likeCount, setLikeCount] = useState(post.likes.length);

  const hundleTakeLike = (id) => {
    // console.log(postLikes.map((like)=> like._id ))

    if (likePost) {
      setLikePost(false);
      dispatch(removeLike(id));
      setLikeCount(likeCount - 1);
    } else {
      setLikePost(true);
      dispatch(addLike(id));
      setLikeCount(likeCount + 1);
    }
  };

  const hundleSavePost = () => {
    if (savePost) {
      setSavePost(false);
      dispatch();
    } else {
      setSavePost(true);
    }
  };
  const handlePostComment = (text, id) => {
    dispatch(addComment(text, id));
    setText('')
  };
  const hundleShowComments = () => {
    if (showComments) {
      setShowComments(false);
    } else {
      setShowComments(true);
    }
  };

  const handleGetUser = (id) => {
    dispatch(getUserOne(id));
  };
  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  const commentStylesScroll = {
    height: 150,
    overflowY: 'scroll'
  }

  const commetsCurrent = comments.filter((comment) => comment.post === post._id).length

  return (
    <div className={styles.ribbonWrapper}>
      <div className={styles.feed_foot}>
        {loadingPosts ? (
          <CircularProgress />
        ) : (
          <img
            width={34}
            height={34}
            src={post.user.avatar ? host + post.user.avatar : Logo}
            alt=""
          />
        )}

        <Link
          to={`/one/user/${post.user._id}`}
        >{`${post.user.firstname} ${post.user.lastname}`}</Link>
        {user?.role === "admin" && (
          <div onClick={() => handleDeletePost(post._id)}>Удалить пост</div>
        )}
      </div>
      <div className={styles.feed_main}>
        <div className={styles.feed_file}>
          <img alt="nf" src={post.imagePost ? host + post.imagePost : Logo} />
        </div>
      </div>
      <div className={styles.section_func}>
        <div className={styles.likes_comms}>
          <div class={styles.likes_controller}>
            <div
              onClick={() => hundleTakeLike(post._id)}
              className={styles.likeIcon}
            >
              {likePost ? (
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
            <div onClick={hundleShowComments} className={styles.commentIcon}>
              <svg
                aria-label="Комментировать"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
          </div>
          <div onClick={hundleSavePost} className={styles.save} alt="">
            {savePost ? (
              <svg
                aria-label="Удалить"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path>
              </svg>
            ) : (
              <svg
                aria-label="Сохранить"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <polygon
                  fill="none"
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            )}
          </div>
        </div>
        <div className={styles.ig_name}>
          <Link
            onClick={() => handleGetUser(post.user._id)}
            to={`/one/user/${post.user._id}`}
          >
            {post.user.firstname}
          </Link>
        </div>
        <div className={styles.postText}>{post.text}</div>
        <div className={styles.like_sect}>
          <span className={styles.likes}>{likeCount}</span>
          <span> отметок "Нравится"</span>
        </div>

        {showComments ? (
          ""
        ) : (
          <div className={styles.comments_sec}>
            <span onClick={hundleShowComments}>Посмотреть все комментарии</span>
            <span className={styles.commentCounter}>
              {commetsCurrent}
            </span>
          </div>
        )}
        {showComments ? (
          <div style={commetsCurrent >= 3 ? commentStylesScroll : {color: "black"}}>
            {comments?.map((comment) => {
              if (comment.post === post._id) {
                return <Comments user={user} comment={comment} />;
              }
            })}
          </div>
        ) : (
          ""
        )}

        <div className={styles.footer_sec}>
          <input
            type=""
            placeholder=" Добавить комментарий..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => handlePostComment(text, post._id)}>
            Опубликовать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;

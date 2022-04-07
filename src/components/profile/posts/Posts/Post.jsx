import React, { useState } from "react";
import styles from "./Posts.module.css";
import Content from "../../../content/Content";
import { useDispatch } from "react-redux";
import { getComments } from "../../../../redux/features/comments";

const Post = ({ comments, post, handleShowContent }) => {
  const [window, setWindow] = useState(false);
  const dispatch = useDispatch()

  const handleOpenPost = () => {
    setWindow(true);
    dispatch(getComments())
  };
  const commentsList = comments.filter(comment => comment.post === post._id)

  const img = post.imagePost;

  const host = "http://localhost:4000/";

  return (
    <div onClick={handleShowContent} className={styles.mainPosts}>
      <div className={styles.mainPostsImg} onClick={handleOpenPost}>
        <img src={`${host}${img}`} alt="postImage" />
      </div>
      {window && <Content comments={commentsList} setWindow={setWindow} post={post} img={img} />}
    </div>
  );
};

export default Post;

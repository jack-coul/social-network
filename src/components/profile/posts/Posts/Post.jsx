import React, { useState } from "react";
import styles from "./Posts.module.css";
import Content from "../../../content/Content";

const Post = ({ post, handleShowContent }) => {
  const [window, setWindow] = useState(false);
  const handleOpenPost = () => {
    setWindow(true);
  };
  const srcImage = "http://localhost:4000/";
  const img = srcImage + post.imagePost;
  return (
    <div onClick={handleShowContent} className={styles.mainPosts}>
      <div className={styles.mainPostsImg} onClick={handleOpenPost}>
        <img src={img} alt="postImage" />
      </div>
      {window && <Content post={post} img={img} />}
    </div>
  );
};

export default Post;

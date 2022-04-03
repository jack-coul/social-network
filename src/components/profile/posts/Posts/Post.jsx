import React from "react";
import styles from "./Posts.module.css";

const Post = ({ post, handleShowContent }) => {
  return (
    <div onClick={handleShowContent} className={styles.mainPosts}>
      <div className={styles.mainPostsImg}>
        <img src={post.image} alt="postImage" />
      </div>
    </div>
  );
};

export default Post;

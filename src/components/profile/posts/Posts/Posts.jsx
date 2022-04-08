import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = ({ posts }) => {
  const { loadingPosts } = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments.comments);

  return loadingPosts ? (
    "loading..."
  ) : (
    <div>
      <div className={styles.main}>
        {posts?.map((post) => {
          return (
            <Post
              comments={comments}
              loadingPosts={loadingPosts}
              key={post._id}
              post={post}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;

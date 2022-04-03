import React, { useState } from "react";
// import { fakeDatabase } from "../fakeDatabase";
import { useSelector } from "react-redux";
import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = () => {
  //   const [posts] = useState(fakeDatabase);
  const [window, setWindow] = useState(false);
  const { posts } = useSelector((state) => state.posts);
  const handleShowContent = () => {
    setWindow(true);
  };
  return (
    <div>
      {window && <div>jjkjkjkjhkjh</div>}
      <div className={styles.main}>
        {posts.map((post) => {
          return (
            <Post
              key={post._id}
              post={post}
              handleShowContent={handleShowContent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;

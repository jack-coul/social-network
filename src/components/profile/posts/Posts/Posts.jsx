import React, { useEffect, useState } from "react";
// import { fakeDatabase } from "../fakeDatabase";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../../../redux/features/posts";
import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = ({ id }) => {
  //   const [posts] = useState(fakeDatabase);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getUserPosts(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className={styles.main}>
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;

import React, { useEffect, useState } from "react";
// import { fakeDatabase } from "../fakeDatabase";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../../../redux/features/posts";
import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = ({ id }) => {
  //   const [posts] = useState(fakeDatabase);
  const dispatch = useDispatch();
  const { posts, loadingPosts } = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(getUserPosts(id));
  }, [dispatch, id]);
  return loadingPosts ? (
    "loading..."
  ) : (
    <div>
      <div className={styles.main}>
        {posts.map((post) => {
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

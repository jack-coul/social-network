import React, { useEffect } from "react";
import styles from "./Saved.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getSaves } from "../../redux/features/saves";

const Saved = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSaves());
  }, [dispatch]);
  const savePosts = useSelector((state) => state.saves.saves);
  console.log(savePosts);

  return (
    <div className={styles.main}>
      {savePosts.map((post) => {
        return (
          <div className={styles.mainPosts}>
            <div className={styles.mainPostsImg}>
              <img src={post.image} alt="postImage" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Saved;

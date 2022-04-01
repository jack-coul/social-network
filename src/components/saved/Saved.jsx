import React, { useEffect, useState } from "react";
import styles from "./Saved.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fakeDatabase1 } from "./fakaDatabase1";
import { getSaves } from "../../redux/features/saves";

const Saved = () => {
  const [posts] = useState(fakeDatabase1);
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

import React, { useEffect } from "react";
import styles from "./Profile.module.css";
import Posts from "./posts/Posts/Posts";
import HeaderForUser from "./headerForUser/HeaderForUser";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts } from "../../redux/features/posts";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);

  const { image, loading, firstname, lastname, id } = useSelector(
    (state) => state.application
  );

  const { posts, loadingPosts } = useSelector((state) => state.posts);

  return (
    <div className={styles.profile}>
      <HeaderForUser />
      {loadingPosts ? (
        <div className={styles.loadingWrapper}>
          <div className={styles.loadingWrap}></div>
          <div className={styles.loadingWrap}></div>
          <div className={styles.loadingWrap}></div>
          <div className={styles.loadingWrap}></div>
        </div>
      ) : (
        <Posts
          image={image}
          loading={loading}
          firstname={firstname}
          lastname={lastname}
          id={id}
          posts={posts}
        />
      )}
    </div>
  );
};

export default Profile;

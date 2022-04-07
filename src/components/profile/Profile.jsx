import React from "react";
import styles from "./Profile.module.css";
import Posts from "./posts/Posts/Posts";
import HeaderForUser from "./headerForUser/HeaderForUser";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <HeaderForUser />
      <Posts />
    </div>
  );
};

export default Profile;

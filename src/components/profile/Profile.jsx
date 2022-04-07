import React, { useEffect } from "react";
import styles from "./Profile.module.css";
import Posts from "./posts/Posts/Posts";
import HeaderForUser from "./headerForUser/HeaderForUser";
import { getUser } from "../../redux/features/application";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  
  const { image, loading, firstname, lastname, id } = useSelector(
    (state) => state.application
  );

  return (
    <div className={styles.profile}>
      <HeaderForUser
        image={image}
        loading={loading}
        firstname={firstname}
        lastname={lastname}
        id={id}
      />
      <Posts
        image={image}
        loading={loading}
        firstname={firstname}
        lastname={lastname}
        id={id}
      />
    </div>
  );
};

export default Profile;

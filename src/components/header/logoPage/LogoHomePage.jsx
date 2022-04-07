import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../../redux/features/application";
import { getUserPosts } from "../../../redux/features/posts";
import styles from "./LogoHomePage.module.css";

const LogoHomePage = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.application);
  const handleGetUser = () => {
    dispatch(getUser());
    dispatch(getUserPosts(id));
  };

  return (
    <>
      <Link to="/">
        <img
          className={styles.imgLogo}
          width={103}
          height={39}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt=""
          onClick={handleGetUser}
        />
      </Link>
    </>
  );
};

export default LogoHomePage;

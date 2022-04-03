import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./UserPage.module.css";
import Logo from "../../Images/user.png";

const UserPage = () => {
  const { image, loading } = useSelector((state) => state.application);
  return (
    <div className={styles.userPage}>
      {loading ? (
        <CircularProgress />
      ) : (
        <img
          width={24}
          height={24}
          src={image ? `http://localhost:4000/${image}` : Logo}
          alt=""
        />
      )}
    </div>
  );
};

export default UserPage;

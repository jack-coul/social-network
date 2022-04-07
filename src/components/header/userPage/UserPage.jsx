import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./UserPage.module.css";
import Logo from "../../Images/user.png";
import { getUser } from "../../../redux/features/application";

const UserPage = () => {
  const { loading, users, image } = useSelector((state) => state.application);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const host = "http://localhost:4000/";
  const img = host + image;
  console.log(image);
  return (
    <div className={styles.userPage}>
      {loading ? (
        <CircularProgress />
      ) : (
        <img width={24} height={24} src={img ? `${img}` : Logo} alt="" />
      )}
    </div>
  );
};

export default UserPage;

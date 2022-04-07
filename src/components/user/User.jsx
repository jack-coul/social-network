import React, { useEffect } from "react";
import styles from "./User.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserOne } from "../../redux/features/application";
import HeaderForUser from "../profile/headerForUser/HeaderForUser";
import Posts from "../profile/posts/Posts/Posts";
import HeaderUser from "./HeaderUser";

const User = () => {
  const dispatch = useDispatch();
  const userId = useParams();

  useEffect(() => {
    dispatch(getUserOne(userId.id));
  }, [dispatch, userId.id]);

  const { searchImage, loading, searchFirstname, searchLastname, user } =
    useSelector((state) => state.application);
  // const freind = user?.freinds.find((freind) => freind === id);
  return (
    <>
      {loading ? (
        "load"
      ) : (
        <>
          <HeaderUser
            image={searchImage}
            loading={loading}
            firstname={searchFirstname}
            lastname={searchLastname}
            id={userId.id}
            // freind={freind}
          />
          <Posts
            image={searchImage}
            loading={loading}
            firstname={searchFirstname}
            lastname={searchLastname}
            id={userId.id}
          />{" "}
        </>
      )}
    </>
  );
};

export default User;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserOne } from "../../redux/features/application";
import Posts from "../profile/posts/Posts/Posts";
import HeaderUser from "./HeaderUser";

const User = () => {
  const dispatch = useDispatch();
  const userId = useParams();

  useEffect(() => {
    dispatch(getUserOne(userId.id));
  }, [dispatch, userId.id]);

  const { searchImage, loading, searchFirstname, searchLastname, id, user } =
    useSelector((state) => state.application);
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
            id={id}
            user={user}
            userId={userId}
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

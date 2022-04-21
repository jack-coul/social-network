import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserOne } from "../../redux/features/application";
import { getUserPosts } from "../../redux/features/posts";
import Posts from "../profile/posts/Posts/Posts";
import HeaderUser from "./HeaderUser";

const User = () => {
  const dispatch = useDispatch();
  const userId = useParams();
  useEffect(() => {
    dispatch(getUserOne(userId.id));
    dispatch(getUserPosts(userId.id));
  }, [dispatch, userId.id]);

  const { searchUser, loading, user } = useSelector(
    (state) => state.application
  );

  const { posts } = useSelector((state) => state.posts);
  return (
    <>
      <HeaderUser
        image={searchUser?.avatar}
        loading={loading}
        firstname={searchUser?.firstname}
        lastname={searchUser?.lastname}
        id={user?._id}
        user={user}
        userId={userId}
        posts={posts}
      />
      <Posts
        image={searchUser?.avatar}
        loading={loading}
        firstname={searchUser?.firstname}
        lastname={searchUser?.lastname}
        posts={posts}
      />
    </>
  );
};

export default User;

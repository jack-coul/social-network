import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/features/posts";
import Ribbon from "./Ribbon";

const Ribbons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const { posts, loadingPosts } = useSelector((state) => state.posts);


  return (
    <div>
      {posts.map((post) => {
        return <Ribbon post={post} loadingPosts={loadingPosts} postLikes={post.likes} />;
      })}
    </div>
  );

};

export default Ribbons;

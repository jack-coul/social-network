import React from "react";
import { useTypesSelector } from "../../../../hooks/useTypesSelector";
import Post from "./Post";
const styles = require("./Posts.module.css");

type IPostObject = {
  imagePost: string;
  text: string;
  [key: string]: any;
};

interface IPostsProps {
  posts?: IPostObject[];
}

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  const { loadingPosts } = useTypesSelector((state) => state.posts);
  const { comments } = useTypesSelector((state) => state.comments);
  return loadingPosts ? (
    <>loading...</>
  ) : (
    <div>
      <div className={styles.main}>
        {posts?.map((post) => {
          return (
            <Post
              comments={comments}
              loadingPosts={loadingPosts}
              key={post._id}
              post={post}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;

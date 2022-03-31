import React, { useState } from 'react';
import { fakeDatabase } from './fakeDatabase';
import styles from './Posts.module.css';



const Posts = () => {
    const [posts] = useState(fakeDatabase)
    return (
        <div className={styles.main}>
                {posts.map((post) => {
                    return(
                        <div className={styles.mainPosts}>
                            <div className={styles.mainPostsImg}>
                                <img src={post.image} alt="postImage"/>
                            </div>
                        </div>
                    )
                })}
            </div>
    );
};

export default Posts;
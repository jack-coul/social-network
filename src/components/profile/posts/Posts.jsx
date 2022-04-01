import React, { useState } from 'react';
import { fakeDatabase } from './fakeDatabase';
import styles from './Posts.module.css';



const Posts = () => {
    const [posts] = useState(fakeDatabase)
    const [window, setWindow] = useState(false);
    const handleShowContent = () => {
        setWindow(true);
    }
    return (
        <>
        {window ? <div>jjkjkjkjhkjh</div> : ""}
        <div className={styles.main}>
                {posts.map((post) => {
                    return(
                        <div onClick={handleShowContent} className={styles.mainPosts}>
                            <div className={styles.mainPostsImg}>
                                <img src={post.image} alt="postImage"/>
                            </div>
                        </div>
                    )
                })}
            </div>
            </>
    );
};

export default Posts;
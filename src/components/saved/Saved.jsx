import React, {useState} from 'react';
import styles from './Saved.module.css';
import { fakeDatabase1 } from './fakaDatabase1'

const Saved = () => {
    const [posts] = useState(fakeDatabase1)

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

export default Saved;
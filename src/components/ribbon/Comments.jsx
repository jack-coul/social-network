import React from 'react';
import styles from "./Ribbon.module.css"

const Comments = ({comment}) => {
    return (
        <div>
            <div className={styles.comments}>
              
              <span>
                <img
                  width={16}
                  src={comment}
                  alt=""
                />
              </span>
              {comment.text}
            </div>
        </div>
    );
};

export default Comments;
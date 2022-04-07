import React from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/features/comments";
import styles from "./Content.module.css";

const Content = ({ comments, setWindow, post, img }) => {

  const [text, setText] = React.useState("");

  

  const hundleGetCommentText = (e) => {
    setText(e.target.value);

  };

  const dispatch = useDispatch();

  const hundleAddComments = () => {
    dispatch(addComment(text, post._id));
  };

  const hundleCloseWindow = () => {
    setWindow(false);
  };

  return (
    <div className={styles.content}>
      <div className={styles.contentMedia}>
        <div className={styles.mediaWrap}>
          <img src={img} alt="content pictur" />
        </div>
      </div>
      <div className={styles.contentComments}>
        <div className={styles.commentsHeader}>
          <div className={styles.commentsHeaderTitle}>
            <div className={styles.commentsHeaderImg}>
              <img src={post.user.avatar} alt="user imag" />
            </div>
            <div className={styles.commentsHeaderUserTitle}>
              <div className={styles.userLogin}>{post.user.login}</div>
            </div>
            <button onClick={hundleCloseWindow} className={styles.buttonClose}>
              x
            </button>
          </div>
          <div className={styles.postText}>{post.text}</div>
        </div>
        <div className={styles.mainComments}>
          {comments.map((comment) => {
            return (
              <div className={styles.mainCommentsShow}>
                <div className={styles.mainCommentsUserLogo}>
                  <img src={post.user.avatar} alt="user Logo" />
                </div>
                <div>
                  <div className={styles.userInfo}>
                    <div className={styles.userName}>userName</div>
                    <div className={styles.userComment}>{comment.text}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.mainCommentButtons}>
          <div className={styles.mainButtons}>
            <div>
              <svg
                aria-label="Не нравится"
                class="_8-yf5 "
                color="#ed4956"
                fill="#ed4956"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </div>
            <div>
              <svg
                aria-label="Комментировать"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                aria-label="Поделиться публикацией"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </div>
          </div>
          <div>
            <svg
              aria-label="Удалить"
              class="_8-yf5 "
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path>
            </svg>
          </div>
        </div>
        <div className={styles.mainLike}>
          <div className={styles.likeCount}>
            <div>Нравится</div>
            <div>0</div>
          </div>
        </div>
        <div>
          <div className={styles.commentForm}>
            <div className={styles.commentInput}>
              <input
                onChange={hundleGetCommentText}
                value={text}
                name=""
                id=""
                placeholder="Добавьте комментарий..."
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className={styles.commentSend}>
              <button onClick={hundleAddComments}>Опубликовать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

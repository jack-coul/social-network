import React, {useState} from 'react';
import styles from './Content.module.css';
import { fakeComments } from './fakeComments';

const Content = () => {
    const [comments] = useState(fakeComments)
    return (
        <div className={styles.content}>
            <div className={styles.contentMedia}>
                <div className={styles.mediaWrap}>
                    <img src="https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg" alt="content pictur" />
                </div>
            </div>
            <div className={styles.contentComments}>
                <div className={styles.commentsHeader}>
                    <div className={styles.commentsHeaderTitle}>
                        <div className={styles.commentsHeaderImg}>
                            <img src="https://avatarko.ru/img/kartinka/2/Batman_1037.jpg" alt='user imag' />
                        </div>
                        <div className={styles.commentsHeaderUserTitle}>
                            <div>fact.off</div>
                            <div>•</div>
                            <div>Подписки</div>
                        </div>
                    </div>
                    <div className={styles.commentsHeaderFunction}>
                        <svg aria-label="Дополнительно" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                    </div>
                </div>
                <div className={styles.mainComments}>
                    {comments.map((comment)=> {
                        return(
                            <div className={styles.mainCommentsShow}>
                                <div className={styles.mainCommentsUserLogo}>
                                    <img src={comment.userLogo} alt="user Logo"/>
                                </div>
                                <div>
                                    <div  className={styles.userInfo}>
                                        <div className={styles.userName}>{comment.userName}</div>
                                        <div className={styles.userComment}>{comment.comment}</div>
                                    </div>
                                    <div className={styles.commentTime}>{comment.time}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.mainCommentButtons}>
                    <div className={styles.mainButtons}>
                        <div>
                            <svg aria-label="Не нравится" class="_8-yf5 " color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                        </div>
                        <div>
                            <svg aria-label="Комментировать" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                        </div>
                        <div>
                            <svg aria-label="Поделиться публикацией" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        </div>
                    </div>
                    <div>
                        <svg aria-label="Удалить" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path></svg>
                    </div>
                </div>
                <div className={styles.mainLike}>
                    <div className={styles.likeCount}>
                        <div>Нравится</div>
                        <div>0</div>
                    </div>
                    <div className={styles.likeTime}>5 март</div>
                </div>
                <div>
                    <form className={styles.commentForm} method='post'>
                        <div className={styles.commentSmile}>
                            <svg aria-label="Смайлик" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                        </div>
                        <div className={styles.commentInput}>
                            <input name="" id=""  placeholder='Добавьте комментарий...' autoComplete='off' autoCorrect='off'/>
                        </div>
                        <div className={styles.commentSend}>
                            <a href="hjkl">Опубликовать</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Content;
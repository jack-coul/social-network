import React from 'react';
import styles from "./../Messages.module.css";

const Conversation = () => {
    return (
        <>
            <div className={styles.userMessageSend}>
                <div className={styles.userAvatar}>
                <img width={37} height={37} src="https://img9.floraexpress.ru/img/products/4019_320.jpg" alt="" />
                </div>
                <div className={styles.userNicknameSendMessage}>
                    Ibrohim
                </div>
                <div className={styles.notic}></div>
            </div>
        </>
    );
};

export default Conversation;
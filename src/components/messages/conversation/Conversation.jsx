import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "../../../redux/features/application";

import styles from "./../Messages.module.css";



const Conversation = ({conversations}) => {
    const dispatch = useDispatch()
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const userID = conversations.members.find((m) => m._id !== "62458d11d519fc03593b18f5" )
        setUser(userID)
        dispatch(getUser(userID._id))
    },[dispatch])
    

    
    
    return (
        <>
            <div className={styles.userMessageSend}>
                <div className={styles.userAvatar}>
                <img width={37} height={37} src="https://img9.floraexpress.ru/img/products/4019_320.jpg" alt="" />
                </div>
                <div className={styles.userNicknameSendMessage}>
                    {user?.firstname}
                </div>
                <div className={styles.notic}></div>
            </div>
        </>
    );
};

export default Conversation;
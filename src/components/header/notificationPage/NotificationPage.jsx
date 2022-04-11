import React from 'react';
import style from './NotificationPage.module.css';

const NotificationPage = () => {
    const data = [
        {
            image: 'https://i.pinimg.com/originals/37/51/a4/3751a49bba6d4ccff20a5074c843e6cc.png',
            name: 'Мао Дзэдун',
            post: 'https://12-kanal.ru/upload/medialibrary/138/1.jpg'
        },
        {
            image: 'https://i.pinimg.com/originals/37/51/a4/3751a49bba6d4ccff20a5074c843e6cc.png',
            name: 'Мао Дзэдун',
            post: 'https://12-kanal.ru/upload/medialibrary/138/1.jpg'
        },
        {
            image: 'https://i.pinimg.com/originals/37/51/a4/3751a49bba6d4ccff20a5074c843e6cc.png',
            name: 'Мао Дзэдун',
            post: 'https://12-kanal.ru/upload/medialibrary/138/1.jpg'
        },
        {
            image: 'https://i.pinimg.com/originals/37/51/a4/3751a49bba6d4ccff20a5074c843e6cc.png',
            name: 'Мао Дзэдун',
            post: 'https://12-kanal.ru/upload/medialibrary/138/1.jpg'
        },
        {
            image: 'https://i.pinimg.com/originals/37/51/a4/3751a49bba6d4ccff20a5074c843e6cc.png',
            name: 'Мао Дзэдун',
            post: 'https://12-kanal.ru/upload/medialibrary/138/1.jpg'
        },
        {
            image: 'https://i.pinimg.com/originals/37/51/a4/3751a49bba6d4ccff20a5074c843e6cc.png',
            name: 'Мао Дзэдун',
            post: 'https://12-kanal.ru/upload/medialibrary/138/1.jpg'
        },
        {
            image: 'https://i.pinimg.com/originals/37/51/a4/3751a49bba6d4ccff20a5074c843e6cc.png',
            name: 'Мао Дзэдун',
            post: 'https://12-kanal.ru/upload/medialibrary/138/1.jpg'
        },
        {
            image: 'https://i.pinimg.com/originals/37/51/a4/3751a49bba6d4ccff20a5074c843e6cc.png',
            name: 'Мао Дзэдун',
            post: 'https://12-kanal.ru/upload/medialibrary/138/1.jpg'
        },
    ]
    return (
        <div className={style.cover}>
        <div className={style.corner}></div>
        <div className={style.main}>
            
            {data.map((item)=> {
                return(
                    <div className={style.user}>
                        <div className={style.userInfo}>
                            <img src={item.image} alt="userImg"/>
                            <div className={style.userName}>{item.name}</div>
                            <div className={style.like}>нравится ваша публикация</div>
                        </div>
                        <div className={style.postImg}>
                            <img src={item.post} alt="postImg"/>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    );
};

export default NotificationPage;
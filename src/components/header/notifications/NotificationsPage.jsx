import React from 'react';
import styles from './Notifications.module.css'

const NotificationsPage = () => {
    return (
        <div className={styles.notificationsPage}>
             <div className={styles.numberOfNotification}>0</div>
            <img width={24} height={24} src="https://cdn-icons-png.flaticon.com/512/77/77682.png" alt="" />
        </div>
    );
};

export default NotificationsPage;
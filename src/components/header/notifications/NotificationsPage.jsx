import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Notifications.module.css";
import NotificationPage from "../notificationPage/NotificationPage";

const NotificationsPage = () => {
  const [window, setWindow] = useState(false);
  const handleNotification = () => {
    setWindow(!window);
  } 
  const { notification } = useSelector((state) => state.notification);
  return (
    <div onClick={handleNotification} className={styles.notificationsPage}>
      <div className={styles.numberOfNotification}>{notification.length}</div>
      <img
        width={24}
        height={24}
        src="https://cdn-icons-png.flaticon.com/512/77/77682.png"
        alt=""
      />
      {window &&  (
        <NotificationPage/>
      )}
    </div>
  );
};

export default NotificationsPage;

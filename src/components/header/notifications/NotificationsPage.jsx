import React from "react";
import { useSelector } from "react-redux";
import styles from "./Notifications.module.css";

const NotificationsPage = () => {
  const { notification } = useSelector((state) => state.notification);
  return (
    <div className={styles.notificationsPage}>
      <div className={styles.numberOfNotification}>{notification.length}</div>
      <img
        width={24}
        height={24}
        src="https://cdn-icons-png.flaticon.com/512/77/77682.png"
        alt=""
      />
    </div>
  );
};

export default NotificationsPage;

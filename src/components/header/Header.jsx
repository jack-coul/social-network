import React from "react";
import styles from "./Header.module.css";
import RibbonPage from "./homePage/RibbonPage";
import LogoHomePage from "./logoPage/LogoHomePage";
import MessagePage from "./messagePage/MessagePage";
import NotificationsPage from "./notifications/NotificationsPage";
import UserPage from "./userPage/UserPage";

const Header = () => {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <LogoHomePage />
        <input placeholder="Поиск" type="text" />

        <div className={styles.iconsWrapper}>
          <RibbonPage />
          <MessagePage />
          <NotificationsPage />
          <UserPage />
        </div>
      </div>
    </header>
  );
};

export default Header;

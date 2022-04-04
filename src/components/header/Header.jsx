import React from "react";
import AddPosts from "./addPosts/AddPosts";
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
          <AddPosts />
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

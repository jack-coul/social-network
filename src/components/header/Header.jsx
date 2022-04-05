import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/features/application";
import AddPosts from "./addPosts/AddPosts";
import styles from "./Header.module.css";
import RibbonPage from "./homePage/RibbonPage";
import LogoHomePage from "./logoPage/LogoHomePage";
import MessagePage from "./messagePage/MessagePage";
import NotificationsPage from "./notifications/NotificationsPage";
import UserPage from "./userPage/UserPage";

const Header = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { users } = useSelector((state) => state.application);
  const usersList = users.filter((user) => {
    if (user.login.includes(user.toLowerCase())) {
      return user;
    }
  });
  return (
    <header>
      <div className={styles.headerWrapper}>
        <LogoHomePage />
        <input
          placeholder="Поиск"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

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

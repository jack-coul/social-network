import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/features/application";
import AddPosts from "./addPosts/AddPosts";
import ExitUser from "./exitPage/ExitUser";
import styles from "./Header.module.css";
import RibbonPage from "./homePage/RibbonPage";
import LogoHomePage from "./logoPage/LogoHomePage";
import MessagePage from "./messagePage/MessagePage";
import NotificationsPage from "./notifications/NotificationsPage";
import UserPage from "./userPage/UserPage";

const Header = () => {
  const [user, setUser] = useState("");
  const [window, setWindow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { users } = useSelector((state) => state.application);
  // const usersList = users.filter((user) => {
  //   if (user.login.includes(user.toLowerCase())) {
  //     return user;
  //   }
  // });

  console.log(users);

  const path = 'http://localhost:4000/'

  const handleOpenWindow = () => {
    setWindow(true);
  };

  const handleCloseWindow = () => {
    setWindow(false);
  };

  return (
    <header>
      <div className={styles.headerWrapper}>
        <LogoHomePage />

        <div className={styles.inpWrapper}>
          <input
            placeholder="Поиск"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            onClick={handleOpenWindow}
            onBlur={handleCloseWindow}
          />

          {window && (
            <div className={styles.searchUsers}>
              {users.map((user) => {
                return (
                  <div className={styles.userWrapper}>
                    <div className={styles.logoUser}>
                      <img style={{borderRadius: 100}} width={30} height={30} src={path+user.avatar} alt="лого юзера" />
                    </div>
                    <div className={styles.nickNameUser}>
                      {user.login}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className={styles.iconsWrapper}>
          <AddPosts />
          <RibbonPage />
          <MessagePage />
          <NotificationsPage />
          <ExitUser />
          <UserPage />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import styles from "./Ribbon.module.css";
import Logo from "../Images/user.png";
import Logo1 from "../Images/img2.jpg";
import Logo2 from "../Images/heart.png";
import Logo3 from "../Images/bubble-chat.png";
import Logo4 from "../Images/send.png";
import Logo5 from "../Images/save.png";
import Logo6 from "../Images/smile.png";
const Ribbon = () => {
  return (
    <div className={styles.ribbonWrapper}>
      <div className={styles.feed_foot}>
        <div className={styles.feed_img}>
          <img src={Logo} alt="" />
        </div>
        <div className={styles.feed_block}>
          <h4>m_kuriev1</h4>
        </div>
        <div className={styles.feed_btn}>
          <button>...</button>
        </div>
      </div>
      <div className={styles.feed_main}>
        <div className={styles.feed_file}>
          <img src={Logo1} alt="" />
        </div>
      </div>
      <div className={styles.section_func}>
        <div className={styles.likes_comms}>
          <div class={styles.likes_controller}>
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
          </div>
          <div className={styles.save} alt="">
            <img src={Logo5} alt="" />
          </div>
        </div>
        <div className={styles.like_sect}>
          <h4>7 002 отметок "Нравится"</h4>
        </div>
        <div className={styles.ig_name}>
          <h4>m_kuriev1</h4>
        </div>
        <div className={styles.comments_sec}>
          <h4>Посмотреть все комментарии (925)</h4>
        </div>
        <div className={styles.time_sec}>
          <h3>12 часов назад</h3>
        </div>
        <div className={styles.footer_sec}>
          <div className={styles.footer_img}>
            <img src={Logo6} alt="" />
          </div>
          <div className={styles.footer_comtns}>
            <input type="" placeholder=" Добавить комментарий..." />
            {/* <div className={styles.footer_sec}> */}
              <button>Опубликовать</button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;


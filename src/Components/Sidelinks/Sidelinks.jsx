import React from "react";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import style from "./Sidelinks.module.scss";

const Sidelinks = () => {
  return (
    <div className={style.iconcontainer}>
      <div className={style.iconimgcont}>
        <FiLinkedin className={style.icon} />
      </div>
      <div className={style.iconimgcont}>
        <FiFacebook className={style.icon} />
      </div>
      <div className={style.iconimgcont}>
        <AiOutlineInstagram className={style.icon} />
      </div>
      <div className={style.iconimgcont}>
        <img src="/images/Line1.png" alt="line" />
      </div>
    </div>
  );
};

export default Sidelinks;

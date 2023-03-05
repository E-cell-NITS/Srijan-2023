import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.module.scss";

const NotFound404 = () => {
  useEffect(() => {
    document.title = "404 | SriGen 4.0";
  }, []);
  return (
    <div className={style.notfnd}>
      <img
        className={style.imgtopnt}
        src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677676385/SriGen4.0/WhatsApp_Image_2023-03-01_at_18.41.47-removebg-preview_btgyyy.png"
        alt=""
      />
      <div className={style.nottexts}>
        <h1>Oops! Something went wrong!!!</h1>
        <h2>We are working on it!</h2>
      </div>
      <div className={style.notfndimg}>
        <img
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677568161/SriGen4.0/404%20page/Data_analyse_mxzois.png"
          alt=""
        />
      </div>
      <div className={style.tohome}>
        <Link to="/">
          <button>
            <svg
              className={style.bcklogo}
              viewBox="0 0 26 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.19824 5.94798L20.6434 5.94798C22.9403 5.94798 24.8024 7.81003 24.8024 10.107L24.8024 11.6327C24.8024 13.9296 22.9403 15.7917 20.6434 15.7917L6.20866 15.7917"
                stroke="white"
                strokeWidth="2.08134"
                strokeLinejoin="round"
              />
              <path
                d="M5.84375 1.57294C4.13521 3.28148 3.17729 4.23939 1.46875 5.94794L5.84375 10.3229"
                stroke="white"
                strokeWidth="2.08134"
                strokeLinejoin="round"
              />
            </svg>
            Go Home
          </button>
        </Link>
      </div>

      <div className={style.rightimgnt}>
        <img
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677676802/SriGen4.0/WhatsApp_Image_2023-03-01_at_18.43.23-removebg-preview_jjrru3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound404;

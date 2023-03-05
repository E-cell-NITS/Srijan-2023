import React from "react";
import style from "./Sponsors.module.scss";
import Data from "../../Data/Sponsor.json";
const Sponsors = () => {
  return (
    <div className={style.sponsormain}>
      <div className={style.sponsors}>
        <h1>
          <span className={style.txtsponhalf}>Our</span> Sponsors
        </h1>
      </div>

      <div className={style.slider}>
        <div className={style.slidetrack}>
          {Data.map((item) => {
            return (
              <div className={style.slide} key={item.id}>
                <a href={item.anchor} rel="noreferrer" target="_#blank">
                  {" "}
                  <img src={item.img} alt="" />
                </a>
              </div>
            );
          })}
          {Data.map((item) => {
            return (
              <div className={style.slide} key={item.id}>
                <a href={item.anchor} rel="noreferrer" target="_#blank">
                  {" "}
                  <img src={item.img} alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

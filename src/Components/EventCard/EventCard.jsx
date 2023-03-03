import React from "react";
import { Link } from "react-router-dom";
import styles from "./EventCard.module.scss";
import Data from "../../Data/EventCardData.json";
const EventCard = (props) => {
  const EventDetailsArray = Data.cardDataArray;

  return (
    <div className={styles.wrapper}>
      <div className={styles.cols}>
        {EventDetailsArray.map((item) => (
          <div
            key={item.id}
            className={styles.col}
            style={{ width: props.width }}
            onTouchStart={(event) => event.currentTarget.classList.toggle("hover")}
          >
            <div className={styles.container}>
              <div
                className={styles.front}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className={styles.inner}>
                  <p>{item.title1}</p>
                  {/* <span>{item.subTitle}</span> */}
                </div>
              </div>
              <div className={styles.back}>
                <div className={styles.inner}>
                  <h1 className={styles.backHead}>{item.subTitle}</h1>
                  <p>{item.content}</p>
                  <div className={styles.buttons}>
                    <button className={styles.register}>Register</button>
                    <Link to={`/event/${item.id}`}>
                      <button className={styles.details}>Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;

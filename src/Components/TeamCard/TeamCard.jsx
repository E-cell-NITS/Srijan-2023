import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import style from "./TeamCard.module.scss";

const TeamCard = (props) => {
  const { name, designation, image, fblink, linkedIn } = props;
  return (
    <div className={style.cardContainer}>
      <div className={style.cardImageDiv}>
        <img src={image} alt="Member" />
      </div>
      <div className={style.cardBody}>
        <div className={style.mediaLinks}>
          <a aria-label="Social Media" target="_blank" rel="noreferrer" href={fblink}>
            <FaFacebook className={style.linkIcons} />
          </a>
          <a aria-label="Social Media" target="_blank" rel="noreferrer" href={linkedIn}>
            <FaLinkedin className={style.linkIcons} />
          </a>
        </div>
        <div className={style.memberName}>{name}</div>
        <div className={style.memberDesignation}>{designation}</div>
      </div>
    </div>
  );
};

export default TeamCard;

import React from "react";
import style from "./Team.module.scss";
import Data from "../../Data/TeamData.json";
import { Sidelinks, TeamCard } from "../../Components";

const Team = () => {
  return (
    <div className={style.teamContainer}>
      <Sidelinks />
      <div className={style.teamHeader}>
        <div className={style.Our}>
          <h1>Our</h1>
        </div>
        <div className={style.Team}>
          <h1>Team</h1>
        </div>
      </div>
      <div className={style.chiefPatron}>
        <div className={style.header}>
          <h1>Chief Patron</h1>
        </div>
        <div className={style.Cards}>
          {Data.chiefPatron.map((event) => {
            return (
              <TeamCard
                key={event.id}
                name={event.name}
                designation={event.designation}
                image={event.image}
                fblink={event.fblink}
                linkedIn={event.linkedIn}
              />
            );
          })}
        </div>
      </div>
      <div className={style.Patrons}>
        <div className={style.header}>
          <h1>Patrons</h1>
        </div>
        <div className={style.Cards}>
          {Data.patrons.map((event) => {
            return (
              <TeamCard
                key={event.id}
                name={event.name}
                designation={event.designation}
                image={event.image}
                fblink={event.fblink}
                linkedIn={event.linkedIn}
              />
            );
          })}
        </div>
      </div>
      <div className={style.Developers}>
        <div className={style.header}>
          <h1>Developers</h1>
        </div>
        <div className={style.Cards}>
          {Data.developers.map((event) => {
            return (
              <TeamCard
                key={event.id}
                name={event.name}
                designation={event.designation}
                image={event.image}
                fblink={event.fblink}
                linkedIn={event.linkedIn}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;

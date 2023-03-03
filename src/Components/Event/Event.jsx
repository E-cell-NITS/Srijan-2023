import styles from "./Event.module.scss";
import EventCard from "../EventCard/EventCard";

const Event = ({ data }) => {
  return (
    <section className={styles.event}>
      <div className={styles.left} key={data.id}>
        <div className={styles.img}>
          <img src={data.img} alt="" />
        </div>
        <div className={styles.hero}>
          <div className={styles.heroleft}>
            <h2>{data["event-title"]}</h2>
            <p>{data["head-content"]}</p>
          </div>
          <div className={styles.heroright}>
            <div className={styles.button}>
              <button className={styles.btn}>
                <a href={data["reg-link"]} target="_blank">
                  Register
                </a>
              </button>
            </div>
            {data.stage_timeline.map((item) => {
              return (
                <div className={styles.stageTimeline} key={item.stage_id}>
                  <h3>DATE</h3>
                  <p>Stage 1 :{item.stage1_datetime}</p>
                  <p>{item.stage1_venue}</p>
                  <br />
                  <p>Stage 2 :{item.stage2_datetime}</p>
                  <p>{item.stage2_venue}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.content}>
          <h1>Rules and Regulations</h1>
          <div className={styles.overview}>
            <h2 className={styles.head1}>OVERVIEW</h2>
            <br />
            <p>
              {data.content.overview.map((val) => {
                return (
                  <>
                    <p>{val}</p>
                    <br />
                  </>
                );
              })}
            </p>
            <br />
            <p>
              {data.content.outcome.map((val) => {
                return (
                  <>
                    <p>{val}</p>
                    <br />
                  </>
                );
              })}
            </p>
            <br />
          </div>
          <div className={styles.stage1}>
            {data.content.stage1.map((item) => {
              return (
                <div className={styles.overview} key={item.stage_id}>
                  <h2 className={styles.head1}>{item.stage_name}</h2>
                  <br />
                  <p>
                    {item.stage_rules.map((val) => {
                      return (
                        <>
                          <p>{val}</p>
                          <br />
                        </>
                      );
                    })}
                  </p>
                  <br />
                  <a href={item.decklink} target="_blank">
                    Click here.
                  </a>
                </div>
              );
            })}
          </div>
          <div className={styles.stage2}>
            {data.content.stage2.map((item) => {
              return (
                <div className={styles.overview} key={item.stage_id}>
                  <h2 className={styles.head1}>{item.stage_name}</h2>
                  <br />
                  <p>
                    {item.stage_rules.map((val) => {
                      return (
                        <>
                          <p>{val}</p>
                          <br />
                        </>
                      );
                    })}
                  </p>
                </div>
              );
            })}
          </div>
          <div className={styles.overview}>
            <h2 className={styles.head1}>GUIDELINES</h2>
            <br />
            <p>
              {data.content.guidelines.map((val) => {
                return (
                  <>
                    <p>{val}</p>
                    <br />
                  </>
                );
              })}
            </p>
            <br />
            <a href={data.content.sublink} target="_blank">
              Click here.
            </a>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h3>Other Events</h3>
        <EventCard width="300px" />
      </div>
    </section>
  );
};

export default Event;

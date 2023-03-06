import {
  Button,
  Speakers,
  Sponsors,
  About,
  GalleryCarousel,
  EventCard,
} from "../../Components";

import style from "./Home.module.scss";

import Data from "../../Data/EventCardData.json";
const dummy = Data.cardDataArray;

const Home = () => {
  return (
    <main className={style.home}>
      <h1>Home Page for Srijan 2023</h1>
      <Button type="button" />
      <About />
      <GalleryCarousel />
      <EventCard
        size="small"
        id={dummy[0].id}
        content={dummy[0].content}
        title1={dummy[0].title1}
        title2={dummy[0].title2}
        image={dummy[0].image}
      />

      <EventCard
        size="small"
        id={dummy[1].id}
        content={dummy[1].content}
        title1={dummy[1].title1}
        title2={dummy[1].title2}
        image={dummy[1].image}
      />

      <EventCard
        size="small"
        id={dummy[2].id}
        content={dummy[2].content}
        title1={dummy[2].title1}
        title2={dummy[2].title2}
        image={dummy[2].image}
      />

      <EventCard
        size="small"
        id={dummy[3].id}
        content={dummy[3].content}
        title1={dummy[3].title1}
        title2={dummy[3].title2}
        image={dummy[3].image}
      />

      <EventCard
        size="small"
        id={dummy[0].id}
        content={dummy[0].content}
        title1={dummy[0].title1}
        title2={dummy[0].title2}
        image={dummy[0].image}
      />

      <Speakers />

      <Sponsors />
    </main>
  );
};

export default Home;

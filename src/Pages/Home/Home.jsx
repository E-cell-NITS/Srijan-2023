import {
  Button,
  Speakers,
  Sponsors,
  About,
  GalleryCarousel,
  EventCard,
} from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      <h1>Home Page for Srijan 2023</h1>
      <Button type="button" />
      <About />
      <GalleryCarousel />
      <EventCard width="535px" />
      <EventCard width="300px" />
      <Speakers />
      <Sponsors />
    </main>
  );
};

export default Home;

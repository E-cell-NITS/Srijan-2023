import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
// eslint-disable-next-line import/no-unresolved
import "swiper/scss";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./GalleryCarousel.module.scss";
import Data from "../../Data/GalleryImagesLinks.json";
const GalleryCarousel = () => {
  const LinkArray = Data.links;
  return (
    <div className={styles.Container}>
      <Swiper
        className={styles.MySwiper}
        slidesPerView={2.5}
        effect="coverflow"
        grabCursor={1}
        centeredSlides={1}
        autoplay={{
          delay: 3000,
        }}
        loop={1}
        modules={[Navigation, Autoplay]}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        navigation={{
          nextEl: "#swiper-button-next",
          prevEl: "#swiper-button-prev",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1.5,
          },
          740: {
            slidesPerView: 3,
          },
        }}

        // swiper end
      >
        <div className={styles.sliderControler}>
          <div className={styles.swiperButtonPrev} id="swiper-button-prev">
            <IoIosArrowBack className={styles.bckarrow} />
          </div>
          <div className={styles.swiperButtonNext} id="swiper-button-next">
            <IoIosArrowForward className={styles.nxtarrow} />
          </div>
        </div>

        {LinkArray.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <div className={styles.Box}>
              <img key={item.id} src={item.link} alt={`Gallery no ${item.id}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryCarousel;

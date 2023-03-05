/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Data from "../../Data/Speakers.json";

import style from "./Speakers.module.scss";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Speakers = () => {
  return (
    <div id={style.speakershomemain}>
      <div className={style.spekrstop}>
        <h1>Speakers</h1>
      </div>

      <div className={style.strtcpkrsmain}>
        <Swiper
          effect="coverflow"
          grabCursor
          spaceBetween={20}
          centeredSlides
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          loop
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          {Data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={style.indicarocard}>
                <div className={style.imgholder}>
                  <img src={item.img} alt={item.name} />
                </div>

                <div className={style.spkrdesc}>
                  <h1 className={style.spkrname}>{item.name}</h1>
                  <h3 className={style.detailsspkr}>{item.desc}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="slider-controler" id={style.controler}>
            <div id={style.btndivholder}>
              <div className="swiper-button-prev slider-arrow" id={style.prevbtn}>
                <IoIosArrowBack className={style.bckarrow} />
              </div>
              <div className="swiper-button-next slider-arrow" id={style.nextbtn}>
                <IoIosArrowForward className={style.nxtarrow} />
              </div>
            </div>
            <div className="swiper-pagination" id={style.paginationbtnsround}></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Speakers;

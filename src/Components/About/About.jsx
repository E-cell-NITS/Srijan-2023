import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { InView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./About.module.scss";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isIntersecting, setIntersecting] = useState(false);
  return (
    <section className={style.about}>
      <div className={style.abt_out}>
        <div className={style.abt_txt}>
          <div className={style.abt_event} data-aos="fade-up">
            <div className={style.abt_head}>
              <h1>
                About <span className={style.abt_span}>The Event</span>
              </h1>
            </div>
            <div className={style.abt_content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, augue
                mattis condimentum gravida ultrices nunc sagittis, faucibus lacus. Ornare
                urna nibh pellentesque odio senectus habitasse eu enim sit. Urna enim
                egestas diam nulla sit. About NIT Silchar Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nisi, augue mattis condimentum gravida
                ultrices nunc sagittis, faucibus lacus. Ornare urna nibh pellentesque odio
                senectus habitasse eu enim sit. Urna enim egestas diam nulla sit.
              </p>
            </div>
          </div>
          <InView threshold={0.3} onChange={(inView) => setIntersecting(inView)}>
            <div className={style.abt_nits} data-aos="fade-up">
              <div className={style.abt_head}>
                <h1>
                  About <span className={style.abt_span}>NIT Silchar</span>
                </h1>
              </div>
              <div className={style.abt_content}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, augue
                  mattis condimentum gravida ultrices nunc sagittis, faucibus lacus.
                  Ornare urna nibh pellentesque odio senectus habitasse eu enim sit. Urna
                  enim egestas diam nulla sit. About NIT Silchar Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Nisi, augue mattis condimentum
                  gravida ultrices nunc sagittis, faucibus lacus. Ornare urna nibh
                  pellentesque odio senectus habitasse eu enim sit. Urna enim egestas diam
                  nulla sit.
                </p>
              </div>
            </div>
          </InView>
        </div>
        <div className={`${style.abt_anim} ${!isIntersecting || style.abt_animRotate} `}>
          <div
            className={`${style.logo_circle_l} ${
              !isIntersecting || style.logo_circle_lSmall
            } `}
          >
            <img
              src="/images/about1.png"
              alt=""
              className={`${style.about_logo1} ${
                !isIntersecting || style.about_logo1Hidden
              } ${!isIntersecting || style.hidden}`}
            />
          </div>
          <div className={`${style.circle}`}></div>
          <div
            className={`${style.logo_circle_s} ${
              !isIntersecting || style.logo_circle_sScale
            }`}
          >
            <img
              src="/images/about2.png"
              alt=""
              className={`${style.about_logo2} ${!isIntersecting && style.hidden} ${
                !isIntersecting || style.about_logo2Flip
              } `}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

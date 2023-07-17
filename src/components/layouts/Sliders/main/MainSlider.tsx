import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./Swipper.module.css";
import Image from "next/image";
import React from 'react'

export default function MainSlider() {
  return (
    <>
      <div
        className={`flex overflow-hidden relative z-10 ${styles.main_home_slider}`}
      >
        <div className="relative w-full">
          <Swiper
            className={styles.main_home_slider}
            modules={[Autoplay, Pagination, FreeMode]}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            spaceBetween={0}
            loop={true}
          >
            <SwiperSlide className={styles.main_home_slider}>
              <Image
                src="/assets/images/slider/slider1.jpg"
                className="object-cover"
                alt=""
                fill
              />
            </SwiperSlide>
            <SwiperSlide className={styles.main_home_slider}>
              <Image
                src="/assets/images/slider/slider2.jpg"
                className="object-cover"
                alt=""
                fill
              />
            </SwiperSlide>
            <SwiperSlide className={styles.main_home_slider}>
              <Image
                src="/assets/images/slider/slider3.jpg"
                className="object-cover"
                alt=""
                fill
              />
            </SwiperSlide>
            <SwiperSlide className={styles.main_home_slider}>
              <Image
                src="/assets/images/slider/slider4.jpg"
                className="object-cover"
                alt=""
                fill
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

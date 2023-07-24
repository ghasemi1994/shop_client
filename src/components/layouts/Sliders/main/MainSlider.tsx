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

      <div className="relative w-full">

        <Swiper
          className="z-10"
          modules={[Autoplay, Pagination, FreeMode]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            type: "bullets",
            el: ".swiper-pagination-main"
          }}
          centeredSlides={true}
          spaceBetween={0}
          loop={true}
        >
          <SwiperSlide className={styles.main_home_slider}>
            <Image
              src="/assets/images/slider/slider1.jpg"
              className="object-cover w-full"
              alt=""
              fill
            />
          </SwiperSlide>
          <SwiperSlide className={styles.main_home_slider}>
            <Image
              src="/assets/images/slider/slider2.jpg"
              className="object-cover w-full"
              alt=""
              fill
            />
          </SwiperSlide>
          <SwiperSlide className={styles.main_home_slider}>
            <Image
              src="/assets/images/slider/slider3.jpg"
              className="object-cover w-full"
              alt=""
              fill
            />
          </SwiperSlide>
          <SwiperSlide className={styles.main_home_slider}>
            <Image
              src="/assets/images/slider/slider4.jpg"
              className="object-cover w-full"
              alt=""
              fill
            />
          </SwiperSlide>
        </Swiper>


        <div className="bottom-2 z-50 absolute w-full text-center">
          <div className="swiper-pagination-main"></div>
        </div>


        <div className=" z-50 bottom-[50%]">
          <div className="swiper-button-prev "></div>
          <div className="swiper-button-next "></div>
        </div>

      </div>

    </>
  );
}

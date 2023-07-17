import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay, A11y } from "swiper";
import Image from "next/image";

export default function PupolarBrands() {
  const brands = [
    "/assets/images/brands/1.png",
    "/assets/images/brands/2.jpg",
    "/assets/images/brands/3.png",
    "/assets/images/brands/4.png",
    "/assets/images/brands/5.png",
    "/assets/images/brands/6.jpg",
    "/assets/images/brands/7.png",
    "/assets/images/brands/8.png",
    "/assets/images/brands/9.png",
    "/assets/images/brands/10.png",
    "/assets/images/brands/11.jpg",
    "/assets/images/brands/12.png",
  ];
  return (
    <>
      <div className="w-full py-4 bg-white rounded-lg border mt-4">
        <div className="flex items-center justify-center ">
          <div className="flex ml-2">
            <svg
              style={{
                width: 24,
                height: 24,
                fill: "var(--color-icon-rating-0-2)",
              }}
            >
              <use xlinkHref="#topBrands" />
            </svg>
          </div>
          <p className="text-lg text-gray-600">محبوب‌ترین برندها</p>
        </div>
        <div className="mt-3 overflow-hidden w-full">
          <div>
            <Swiper
              modules={[FreeMode, Autoplay, A11y]}
              spaceBetween={1}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                320: {
                  slidesPerView: 3,
                },
                480: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 6,
                },
                1280: {
                  slidesPerView: 7,
                },
              }}
              centeredSlides={false}
            >
              {brands.map((item, index) => (
                <SwiperSlide className="" key={index}>
                  <a
                    className="px-4 py-1 overflow-hidden flex item-center justify-center h-full shrink-0"
                    data-cro-id="hp-favorited-barnds"
                    href="#"
                    dideo-checked="true"
                  >
                    <div
                      className="flex item-center justify-center"
                      style={{ width: "110px", height: "110px" }}
                    >
                      <Image
                        src={item}
                        className="w-100 inline-block object-contain p-4"
                        alt=""                    
                        fill
                      />
                    
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

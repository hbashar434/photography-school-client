import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import img1 from "../../../assets/banner/img1.png";
import img2 from "../../../assets/banner/img2.png";
import img3 from "../../../assets/banner/img3.png";
import img4 from "../../../assets/banner/img4.png";
import img5 from "../../../assets/banner/img5.png";
import img6 from "../../../assets/banner/img6.png";

//TODO: add some text on banner

const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} className="w-full " />
          <div className="absolute top-[32%] lg:top-[40%] left-[24%] lg:left-[32%] text-center my-banner-bg text-white">
            <h2 className="text-lg lg:text-3xl font-bold uppercase">
              Capture the Essence
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full " />
          <div className="absolute top-[32%] lg:top-[40%] left-[22%] lg:left-[33%] text-center my-banner-bg text-white">
            <h2 className="text-md lg:text-3xl font-bold uppercase">
              Unleash Your Creativity
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full " />
          <div className="absolute top-[32%] lg:top-[40%] left-[24%] lg:left-[35%] text-center my-banner-bg text-white">
            <h2 className="text-md lg:text-3xl font-bold uppercase">
              Journey Through Time
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-full " />
          <div className="absolute top-[32%] lg:top-[40%] left-[19%] lg:left-[33%] text-center my-banner-bg text-white">
            <h2 className="text-md lg:text-3xl font-bold uppercase">
              Celebrating Life&apos;s Moments
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="w-full " />
          <div className="absolute top-[32%] lg:top-[40%] left-[15%] lg:left-[29%] text-center my-banner-bg text-white">
            <h2 className="text-md lg:text-3xl font-bold uppercase">
              Masterpieces in Monochrome
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} className="w-full " />
          <div className="absolute top-[32%] lg:top-[40%] left-[24%] lg:left-[33%] text-center my-banner-bg text-white">
            <h2 className="text-md lg:text-3xl font-bold uppercase">
              The Beauty of Simplicity
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

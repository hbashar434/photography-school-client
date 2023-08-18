import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import img1 from "../../../assets/banner/img1.jpg";
import img2 from "../../../assets/banner/img2.jpg";
import img3 from "../../../assets/banner/img3.jpg";
import img4 from "../../../assets/banner/img4.jpg";
import img5 from "../../../assets/banner/img5.jpg";
import img6 from "../../../assets/banner/img6.jpg";

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
          <img src={img1} className="w-full md:h-[668px] " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full md:h-[668px] " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full md:h-[668px] " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-full md:h-[668px] " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="w-full md:h-[668px] " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} className="w-full md:h-[668px] " />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

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

const imagesWithDescriptions = [
  {
    url: img1,
    description:
      "Photography is the art of capturing moments that tell stories, evoke emotions, and freeze time. It's a unique blend of technical skill and artistic vision, allowing us to create visual narratives that last a lifetime.",
  },
  {
    url: img2,
    description:
      "Every picture tells a story, and in the world of photography, we become storytellers. Whether it's a candid moment, a breathtaking landscape, or a carefully crafted composition, each photograph has a tale to share.",
  },
  {
    url: img3,
    description:
      "Explore the world through the lens of a camera and discover beauty in unexpected places. Photography is a passport to new perspectives, a tool for seeing the extraordinary in the ordinary.",
  },
  {
    url: img4,
    description:
      "Capture the beauty of nature in its purest form. From majestic mountains to delicate flowers, photography allows us to appreciate and preserve the wonders of the natural world.",
  },
  {
    url: img5,
    description:
      "Photography is not just a hobby; it's a journey of self-discovery. Through the lens, we learn to see ourselves and the world around us with new eyes, finding inspiration in the everyday.",
  },
  {
    url: img6,
    description:
      "See the world differently through photography. It's a visual language that transcends borders and connects us with people and places, reminding us of our shared humanity.",
  },
];

const Banner = () => {
  return (
    <div>
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            background-color: black;
            padding: 10px;
            width: 50px; 
            height: 40px;
            border-radius: 3px;
          }

          .swiper-button-next::after, .swiper-button-prev::after {
            color: white;
            font-size: 20px;
            margin: 0;
          }
        `}
      </style>
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
        {imagesWithDescriptions.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full md:h-[668px]">
              <img
                src={image.url}
                className="w-full h-full object-cover"
                alt={`Slide ${index}`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="bg-black rounded bg-opacity-50 text-white text-xs lg:text-xl p-4"
                  style={{ width: "70%" }}
                >
                  {image.description}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

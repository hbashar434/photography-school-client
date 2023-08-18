import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const headingAnimation = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, type: "spring" },
  },
};

const sectionBodyAnimation = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75,
    },
  },
};

const Reviews = [
  {
    id: 1,
    name: "Alex Turner",
    bio: "Photography Enthusiast",
    img: "https://i.ibb.co/yfXr10D/img4.jpg",
    description:
      "I've never seen such comprehensive photography courses before. Each lesson is a visual delight, and the instructors' insights are invaluable.",
  },
  {
    id: 2,
    name: "Ryan Hughes",
    bio: "Aspiring Photographer",
    img: "https://i.ibb.co/7j7yN9P/img3.jpg",
    description:
      "The courses on your platform have been a game-changer for me. I've gained a deeper understanding of various photography techniques.",
  },
  {
    id: 3,
    name: "Nathan Carter",
    bio: "Creative Visual Artist",
    img: "https://i.ibb.co/Nj4Bgm8/img1.jpg",
    description:
      "As someone passionate about visual storytelling, your courses have exceeded my expectations. I've honed my skills and developed a unique style.",
  },
  {
    id: 4,
    name: "Ethan Anderson",
    bio: "Portrait Photography Enthusiast",
    img: "https://i.ibb.co/Js0xw8z/img5.jpg",
    description:
      "Your platform has been a constant source of inspiration. The courses are tailored perfectly for photographers aiming to capture emotions through portraits.",
  },
  {
    id: 5,
    name: "Noah Cooper",
    bio: "Landscape Photographer",
    img: "https://i.ibb.co/RNRZpf1/img2.jpg",
    description:
      "The depth of knowledge in your courses is remarkable. I've improved my skills in capturing the beauty of landscapes and translating them into stunning photos.",
  },
  {
    id: 6,
    name: "Liam Miller",
    bio: "Travel Photography Enthusiast",
    img: "https://i.ibb.co/ZNVZw9L/img6.jpg",
    description:
      "Your photography courses have opened my eyes to the world of travel photography. I've learned techniques that have transformed my travel shots into captivating stories.",
  },
];

const ReviewSection = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 px-4 container mx-auto text-center">
      <motion.div
        className="mb-8"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h2 className="my-text-g text-3xl font-semibold mb-6">
          What our students say
        </h2>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        <Slider {...settings}>
          {Reviews.map((review) => (
            <div key={review.id}>
              <motion.div
                className="mx-4 rounded-lg shadow-xl single-blog cursor-pointer border-2 border-primary pt-6 flex flex-col justify-between h-[300px] card"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="px-6">
                  <FaQuoteLeft className="mb-4 text-4xl my-text" />
                  <h2 className="text-center text-slate-300">{review.description}</h2>
                </div>
                <div className="flex justify-end px-6 py-2 mt-12 rounded-b bg-primary">
                  <div className="mr-4 text-right text-white ">
                    <h2 className="py-1 font-medium leading-none">
                      {review.name}
                    </h2>
                    <p className="text-xs leading-none">{review.bio}</p>
                  </div>
                  <img
                    src={review.img}
                    alt="client"
                    className="inline-block w-16 h-16 -mt-10 bg-white rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default ReviewSection;

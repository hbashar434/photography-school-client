import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCamera, FaGraduationCap, FaStar } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const timelineData = [
  {
    date: "2022 - Present",
    iconBackground: "#232D3F",
    icon: <FaGraduationCap />,
    title: "Photography Mastery",
    subtitle: "World-Class Institute",
    description:
      "Embarking on an Epic Journey to Master the Art of Photography",
  },
  {
    date: "2023 - Present",
    iconBackground: "#132043",
    icon: <FaStar />,
    title: "Success Story",
    subtitle: "International Photography Award",
    description:
      "I won the prestigious International Photography Award for my captivating wildlife photographs.",
  },
  {
    date: "2022",
    iconBackground: "#213555",
    icon: <FaStar />,
    title: "Success Story",
    subtitle: "Photography Exhibition",
    description:
      "My work was featured in a renowned photography exhibition, where I received accolades for my unique perspective.",
  },
  {
    date: "2022",
    iconBackground: "#252B48",
    icon: <FaGraduationCap />,
    title: "Advanced Photography Techniques",
    subtitle: "Photography School",
    description:
      "Explored advanced photography techniques and post-processing.",
  },
  {
    date: "2021 - 2022",
    iconBackground: "#001C30",
    icon: <FaCamera />,
    title: "Photography Internship",
    subtitle: "Renowned Studio",
    description:
      "Collaborated with professional photographers, gaining hands-on experience.",
  },
];

const TimeLine = () => {
  return (
    <div className="py-12 md:py-24 px-4">
      <Slide className="pb-8 my-text-g text-center">
        Our Journey of Excellence
      </Slide>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            contentStyle={{
              background: "#232D3F",
              color: "#EEEEEE",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 1px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #232631",
            }}
            key={index}
            className={
              item.title.includes("Success")
                ? "vertical-timeline-element--success"
                : "vertical-timeline-element--education"
            }
            date={item.date}
            iconStyle={{ background: item.iconBackground, color: "#fff" }}
            icon={item.icon}
          >
            <h3 className="vertical-timeline-element-title dark:text-gray-300 my-text">
              {item.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle dark:text-gray-300 my-text">
              {item.subtitle}
            </h4>
            <p className="my-text">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;

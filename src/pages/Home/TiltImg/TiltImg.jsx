import React from "react";
import Tilt from "react-parallax-tilt";
import gallery from "../../../assets/parallax/gallery.jpg";

const TiltImg = () => (
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.9}
    glareColor="#151d42"
    glarePosition="all"
  >
    <h2 className="my-text-g text-3xl py-2 text-center">
      Through the Lens of Time
    </h2>
    <h3 className="my-text-g text-xl pb-8 text-center">
      Preserving Your Most Cherished Memories
    </h3>
    <img src={gallery} className="w-[100vw] h-[80vh]" alt="pic" />
  </Tilt>
);

export default TiltImg;

import React from "react";
import Tilt from "react-parallax-tilt";
import gallery from "../../../assets/parallax/gallery.jpg";

const TiltImg = () => (
  <Tilt
    tiltEnable={false}
    glareEnable={true}
    glareMaxOpacity={0.8}
    glareColor="white"
    glarePosition="bottom"
    className="mx-2 mt-10 lg:mt-0"
  >
    <h2 className="my-text-g pt-6 text-center">
      Through the Lens of Time
    </h2>
    <h3 className="my-text-g pb-6 text-center">
      Preserving Your Most Cherished Memories
    </h3>
    <div className="bg-white p-1">
      <img src={gallery} className="w-[100vw] h-[80vh]" alt="picture" />
    </div>
  </Tilt>
);

export default TiltImg;

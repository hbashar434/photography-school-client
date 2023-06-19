import React from "react";
import Banner from "../Banner/Banner";
import FeatureClasses from "../FeatureClasses/FeatureClasses";
import FeatureInstructors from "../FeatureInstructors/FeatureInstructors";
import Newsletter from "../NewsLetter/NewsLetter";
import TiltImg from "../TiltImg/TiltImg";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureClasses></FeatureClasses>
      <FeatureInstructors></FeatureInstructors>
      <TiltImg></TiltImg>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;

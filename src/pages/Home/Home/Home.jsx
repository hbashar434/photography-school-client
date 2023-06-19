import React from "react";
import Banner from "../Banner/Banner";
import FeatureClasses from "../FeatureClasses/FeatureClasses";
import FeatureInstructors from "../FeatureInstructors/FeatureInstructors";
import Newsletter from "../NewsLetter/NewsLetter";
import TiltImg from "../TiltImg/TiltImg";
import CountUpCard from "../CountUpCard/CountUpCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureClasses></FeatureClasses>
      <FeatureInstructors></FeatureInstructors>
      <TiltImg></TiltImg>
      <CountUpCard></CountUpCard>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;

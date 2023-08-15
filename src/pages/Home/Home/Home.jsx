import React from "react";
import Banner from "../Banner/Banner";
import FeatureClasses from "../FeatureClasses/FeatureClasses";
import FeatureInstructors from "../FeatureInstructors/FeatureInstructors";
import TiltImg from "../TiltImg/TiltImg";
import CountUpCard from "../CountUpCard/CountUpCard";
import GetReady from "./GetReady/GetReady";
// import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureClasses></FeatureClasses>
      <FeatureInstructors></FeatureInstructors>
      <TiltImg></TiltImg>
      <CountUpCard></CountUpCard>
      <GetReady></GetReady>
      {/* <WhyChooseUs></WhyChooseUs> */}
    </div>
  );
};

export default Home;

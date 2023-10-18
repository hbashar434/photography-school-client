import React from "react";
import Banner from "../Banner/Banner";
import FeatureClasses from "../FeatureClasses/FeatureClasses";
import FeatureInstructors from "../FeatureInstructors/FeatureInstructors";
import TiltImg from "../TiltImg/TiltImg";
import CountUpCard from "../CountUpCard/CountUpCard";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import GetReady from "../GetReady/GetReady";
import ReviewSection from "../ReviewSection/ReviewSection";
import TimeLine from "../TimeLine/TimeLine";
import PhotoStories from "../PhotoStories/PhotoStories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureClasses></FeatureClasses>
      <FeatureInstructors></FeatureInstructors>
      <PhotoStories></PhotoStories>
      <TiltImg></TiltImg>
      <CountUpCard></CountUpCard>
      <GetReady></GetReady>
      <TimeLine></TimeLine>
      <WhyChooseUs></WhyChooseUs>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;

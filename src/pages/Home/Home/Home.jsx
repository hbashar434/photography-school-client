import React from "react";
import Banner from "../Banner/Banner";
import FeatureClasses from "../FeatureClasses/FeatureClasses";
import FeatureInstructors from "../FeatureInstructors/FeatureInstructors";
import Newsletter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureClasses></FeatureClasses>
      <FeatureInstructors></FeatureInstructors>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;

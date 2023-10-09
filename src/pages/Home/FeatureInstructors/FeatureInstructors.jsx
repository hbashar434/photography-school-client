import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import InstructorsCard from "../../../components/Card/InstructorsCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Slide } from "react-awesome-reveal";
import Aos from "aos";
import "aos/dist/aos.css";

const FeatureInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ["FeatureInstructors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/instructors?limit=6");
      return res.data;
    },
  });

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="md:mb-24">
      <div className="px-4 py-4">
        <Slide className="my-text-g text-center">
          Our Popular Instructor
        </Slide>
      </div>
      <div
        className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 px-4"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {data.map((instructor) => (
          <InstructorsCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default FeatureInstructors;

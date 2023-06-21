import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import InstructorsCard from "../../../components/Card/InstructorsCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Slide } from "react-awesome-reveal";

const FeatureInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ["FeatureInstructors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/instructors?limit=6");
      return res.data;
    },
  });

  return (
    <div className="md:mb-24">
      <div className="px-4 py-4">
        <Slide className="text-4xl my-text-g text-center">
          Our Popular Instructor
        </Slide>
      </div>
      <div className="grid gap-6 md:gird-cols-2 lg:grid-cols-3 p-4">
        {data.map((instructor) => (
          <InstructorsCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default FeatureInstructors;

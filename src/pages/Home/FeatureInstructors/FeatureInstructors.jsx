import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import InstructorsCard from "../../../components/Card/InstructorsCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const FeatureInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ["FeatureInstructors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/instructors?limit=6");
      console.log(res.data);
      return res.data;
    },
  });
  // const [instructors, setInstructors] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/instructors?limit=6")
  //     .then((res) => res.json())
  //     .then((data) => setInstructors(data));
  // }, []);

  return (
    <div className="my-10 border-2">
      <div className="px-4 py-4 border-b-2">
        <h1 className="text-3xl my-text-g">Our Popular Instructor </h1>
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

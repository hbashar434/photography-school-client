import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import InstructorsCard from "../../components/Card/InstructorsCard";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ["Instructors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/instructors");
      return res.data;
    },
  });
  return (
    <div className="py-10">
      <div className="text-center py-4">
        <h1 className="text-3xl my-text-g">Our Honorable Instructor </h1>
      </div>
      <div className="grid gap-6 md:gird-cols-3 lg:grid-cols-4 p-4">
        {data.map((instructor) => (
          <InstructorsCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;

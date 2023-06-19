import { useQuery } from "@tanstack/react-query";
import React from "react";
import ClassesCard from "../../../components/Card/ClassesCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Slide } from "react-awesome-reveal";


const FeatureClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data = [] } = useQuery({
    queryKey: ["FeatureClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes?limit=6");
      return res.data;
    },
  });

  return (
    <div className="my-20">
      <Slide className="text-4xl p-4 my-text-g text-center">
        Featured Classes
      </Slide>
      <div className="my-3 grid md:grid-cols-3 gap-6 px-4">
        {data.map((cls) => (
          <ClassesCard key={cls._id} cls={cls} />
        ))}
      </div>
    </div>
  );
};

export default FeatureClasses;

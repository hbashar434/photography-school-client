import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ClassesCard from "../../components/Card/ClassesCard";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes");
      console.log("res from axios", res.data);
      return res.data;
    },
  });

  return (
    <div className="my-20 border-2 border-gray-500">
      <div className="text-center">
        <h1 className="text-3xl p-4 my-text-g">Our Photography Classes</h1>
        <p className="text-xl my-text font-semibold">Learn Photography Properly</p>
      </div>
      <div className="my-3 grid md:grid-cols-3 gap-6 px-4">
        {data.map((cls) => (
          <ClassesCard key={cls._id} cls={cls} />
        ))}
      </div>
    </div>
  );
};

export default Classes;

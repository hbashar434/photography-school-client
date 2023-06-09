import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ClassTable from "../../../components/ClassTable/ClassTable";

const UserSelectedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ["classlist"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classlist");
      return res.data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-4 px-6 bg-purple-800 text-white">#</th>
            <th className="py-4 px-6 bg-pink-800 text-white">Image</th>
            <th className="py-4 px-6 bg-blue-800 text-white">Course Name</th>
            <th className="py-4 px-6 bg-green-800 text-white">Instructor</th>
            <th className="py-4 px-6 bg-fuchsia-800 text-white">Seats</th>
            <th className="py-4 px-6 bg-yellow-800 text-white">Price</th>
            <th className="py-4 px-6 bg-red-800 text-white">Payment</th>
            <th className="py-4 px-6 bg-indigo-800 text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((list, index) => (
            <ClassTable key={list._id} index={index} list={list} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserSelectedClasses;

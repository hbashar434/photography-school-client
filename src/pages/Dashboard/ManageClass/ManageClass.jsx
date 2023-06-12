import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ManageClassTable from "../../../components/ManageClassTable/ManageClassTable";

const ManageClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data = [], refetch } = useQuery({
    queryKey: ["Classes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes");
      return res.data;
    },
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-4 px-3 bg-purple-700 text-white">#</th>
            <th className="py-4 px-3 bg-pink-700 text-white">Image</th>
            <th className="py-4 px-3 bg-blue-700 text-white">Course</th>
            <th className="py-4 px-3 bg-green-700 text-white">Instructor</th>
            <th className="py-4 px-3 bg-pink-700 text-white">Email</th>
            <th className="py-4 px-3 bg-teal-700 text-white">Price</th>
            <th className="py-4 px-3 bg-fuchsia-700 text-white">Seats</th>
            <th className="py-4 px-3 bg-red-700 text-white">Approve</th>
            <th className="py-4 px-3 bg-emerald-700 text-white">Deny</th>
            <th className="py-4 px-3 bg-indigo-700 text-white">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {data.map((course, index) => (
            <ManageClassTable
              key={course._id}
              index={index}
              course={course}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;

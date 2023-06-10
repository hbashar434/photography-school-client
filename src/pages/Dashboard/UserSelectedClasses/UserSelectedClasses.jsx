import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ClassTable from "../../../components/ClassTable/ClassTable";
import useAuth from "../../../hooks/useAuth";

const UserSelectedClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data = [], refetch } = useQuery({
    queryKey: ["classlist", "UserSelectedClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/classlist?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-4 px-6 bg-purple-700 text-white">#</th>
            <th className="py-4 px-6 bg-pink-700 text-white">Image</th>
            <th className="py-4 px-6 bg-blue-700 text-white">Course Name</th>
            <th className="py-4 px-6 bg-green-700 text-white">Instructor</th>
            <th className="py-4 px-6 bg-fuchsia-700 text-white">Seats</th>
            <th className="py-4 px-6 bg-yellow-700 text-white">Price</th>
            <th className="py-4 px-6 bg-red-700 text-white">Payment</th>
            <th className="py-4 px-6 bg-indigo-700 text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((list, index) => (
            <ClassTable
              key={list._id}
              index={index}
              list={list}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserSelectedClasses;

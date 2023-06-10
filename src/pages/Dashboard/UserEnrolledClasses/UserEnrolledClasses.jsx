import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import EnrollTable from "../../../components/EnrollTable/EnrollTable";

const UserEnrolledClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ["enrolled", "UserEnrolledClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolled?email=${user?.email}`);
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
            <th className="py-4 px-6 bg-fuchsia-700 text-white">Price</th>
            <th className="py-4 px-6 bg-red-700 text-white">Payment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((course, index) => (
            <EnrollTable key={course._id} index={index} course={course} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserEnrolledClasses;

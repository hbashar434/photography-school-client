import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const InstructorClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ["myclasses", "InstructorClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myclasses?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-center">
          <thead className="text-lg">
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Total Enrolled</th>
              <th>Update</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {data.map((course, index) => (
              <tr key={course._id}>
                <th>{index + 1}</th>
                <td>{course?.name}</td>
                <td>{course?.enrolled}</td>
                <td>
                  <button className=" text-indigo-800 hover:bg-indigo-500 bg-indigo-400 rounded-3xl px-4 py-2">
                    update
                  </button>
                </td>
                <td className="my-text-g">{course?.status}</td>
                <td>
                  <button className=" text-indigo-800 hover:bg-indigo-500 bg-indigo-400 rounded-3xl px-4 py-2">
                    feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorClasses;

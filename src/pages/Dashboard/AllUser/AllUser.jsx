import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UserTable from "../../../components/UserTable/UserTable";

const AllUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    console.log(data);
    return res.data;
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-4 px-6 bg-green-800 text-white">#</th>
            <th className="py-4 px-6 bg-blue-800 text-white">Name</th>
            <th className="py-4 px-6 bg-purple-800 text-white">Email</th>
            <th className="py-4 px-6 bg-fuchsia-700 text-white">Role</th>
            <th className="py-4 px-6 bg-pink-800 text-white">
              Make Instructor
            </th>
            <th className="py-4 px-6 bg-indigo-800 text-white">Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <UserTable
              key={user._id}
              index={index}
              user={user}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;

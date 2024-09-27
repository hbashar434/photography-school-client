import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import InstructorsCard from "../../components/Card/InstructorsCard";
import Loading from "../Shared/Loading/Loading";
import TemporaryError from "../Shared/ErrorPage/TemporaryError";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["Instructors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/instructors");
      throw new Error("server down");

      // return res.data;
    },
  });

  return (
    <div className="py-10">
      <div className="text-center py-4">
        <h1 className="text-3xl my-text-g">Our Honorable Instructors</h1>
      </div>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <TemporaryError />
      ) : data.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 p-4">
          {data.map((instructor) => (
            <InstructorsCard key={instructor._id} instructor={instructor} />
          ))}
        </div>
      ) : (
        <TemporaryError />
      )}
    </div>
  );
};

export default Instructors;

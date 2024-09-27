import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ClassesCard from "../../components/Card/ClassesCard";
import Loading from "../Shared/Loading/Loading";
import TemporaryError from "../Shared/ErrorPage/TemporaryError";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["Classes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes?approved=true");
      return res.data;
    },
  });

  return (
    <div className="py-10">
      <div className="text-center my-4">
        <h1 className="text-3xl my-text-g">Our Photography Classes</h1>
        <p className="text-xl my-text font-semibold mt-2">
          Learn Photography Properly
        </p>
      </div>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <TemporaryError />
      ) : data.length > 0 ? (
        <div className="my-3 grid md:grid-cols-3 lg:grid-cols-2 gap-6 px-4">
          {data.map((cls) => (
            <ClassesCard key={cls._id} cls={cls} />
          ))}
        </div>
      ) : (
        <TemporaryError />
      )}
    </div>
  );
};

export default Classes;

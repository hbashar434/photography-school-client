import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import ClassesCard from "../../../components/Card/ClassesCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Slide } from "react-awesome-reveal";
import Aos from "aos";
import "aos/dist/aos.css";
import TemporaryError from "../../Shared/ErrorPage/TemporaryError";
import Loading from "../../Shared/Loading/Loading";

const FeatureClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["FeatureClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes?limit=8");
      return res.data;
    },
  });

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="my-8 md:my-20 px-4">
      <Slide className="p-4 my-text-g text-center">Featured Classes</Slide>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <TemporaryError />
      ) : data.length > 0 ? (
        <div
          className="my-3 grid md:grid-cols-2 lg:grid-cols-2 gap-6"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
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

export default FeatureClasses;

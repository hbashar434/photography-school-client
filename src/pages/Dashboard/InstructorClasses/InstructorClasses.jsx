import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UpdateModal from "../UpdateModal/UpdateModal";
import FeedbackModal from "../../../components/FeedbackModal/FeedbackModal";

const InstructorClasses = () => {
  const [classDetails, setClassDetails] = useState();
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
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

  const handleUpdate = async (id) => {
    setUpdateModalOpen(true);
    fetch(`${import.meta.env.VITE_API_URL}/updateclass/${id}`)
      .then((res) => res.json())
      .then((data) => setClassDetails(data));
  };

  const handleFeedback = (id) => {
    setFeedbackModalOpen(true);
    fetch(`${import.meta.env.VITE_API_URL}/updateclass/${id}`)
      .then((res) => res.json())
      .then((data) => setClassDetails(data));
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-center">
          <thead className="text-lg">
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Total Enrolled</th>
              <th>Status</th>
              <th>Update</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {data.map((course, index) => (
              <tr key={course._id}>
                <th>{index + 1}</th>
                <td>{course?.name}</td>
                <td>{course?.enrolled}</td>
                <td className="my-text-g">{course?.status}</td>
                <td>
                  <button
                    className=" text-indigo-800 hover:bg-indigo-400 bg-indigo-300 rounded-3xl px-4 py-2"
                    onClick={() => handleUpdate(course._id)}
                  >
                    update
                  </button>
                </td>
                <td>
                  {course?.feedback && (
                    <button
                      className=" text-indigo-800 hover:bg-indigo-400 bg-indigo-300 rounded-3xl px-4 py-2"
                      onClick={() => handleFeedback(course._id)}
                    >
                      feedback
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateModal
        isOpen={isUpdateModalOpen}
        closeModal={() => setUpdateModalOpen(false)}
        classDetails={classDetails}
      />
      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        closeModal={() => setFeedbackModalOpen(false)}
        classDetails={classDetails}
      />
    </div>
  );
};

export default InstructorClasses;

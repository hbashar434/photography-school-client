import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ["enrolled", "UserEnrolledClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/enrolled?email=${user?.email}&sort=${-1}`
      );
      return res.data;
    },
  });
  console.log(data);

  return (
    <div className="my-16">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((history, index) => (
              <tr key={history._id}>
                <th>{index + 1}</th>
                <td>{history?.name}</td>
                <td>$ {history?.price}</td>
                <td>{history?.transactionId}</td>
                <td>{new Date(history?.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;

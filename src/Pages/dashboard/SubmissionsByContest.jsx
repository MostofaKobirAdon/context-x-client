import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SubmissionCard from "../../components/Dashboard/SubmissionCard";

const SubmissionsByContest = () => {
  const { contestId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data } = useQuery({
    queryKey: ["submissions-by-contest", contestId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/submissions/${contestId}`);
      return res.data;
    },
  });
  console.log(data);
  return (
    <>
      {isLoading ? (
        <div className="bg-base-200 flex justify-center items-center rounded-xl min-h-[80vh] p-3">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <div className="bg-base-200 rounded-xl min-h-[85vh] p-3">
          <div className="text-center mb-4">
            <h1 className="section-heading">
              <span className="font-bold text-primary">Submitted</span> Tasks
            </h1>
          </div>
          <div className="bg-base-300  rounded-2xl w-11/12 mx-auto shadow-sm gap-6 grid grid-cols-2 p-6">
            {data.map((submission) => (
              <SubmissionCard data={submission} key={submission._id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SubmissionsByContest;

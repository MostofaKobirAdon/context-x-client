import React from "react";
import SubmissionCard from "../../components/Dashboard/SubmissionCard";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Submissions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: submissions = [] } = useQuery({
    queryKey: ["submissions-by-creatorEmail", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/submissions?creatorEmail=${user?.email}`
      );
      return res.data;
    },
  });
  return (
    <div className="bg-base-200 rounded-xl min-h-[85vh] p-3">
      <div className="text-center mb-4">
        <h1 className="section-heading">
          All <span className="font-bold text-primary">Submissions</span>{" "}
          Contests
        </h1>
      </div>
      <div className="bg-base-300  rounded-2xl w-11/12 mx-auto shadow-sm gap-6 grid grid-cols-2 p-6">
        {submissions.map((submission, index) => (
          <SubmissionCard data={submission} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Submissions;

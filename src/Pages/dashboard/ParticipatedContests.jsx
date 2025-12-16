import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ParticipatedContests = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { isLoading, data: contests = [] } = useQuery({
    queryKey: ["participated-contests", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/my-paid-contests?email=${user.email}`
      );
      return res.data;
    },
  });
  return (
    <>
      {isLoading ? (
        <div className="bg-base-200 flex justify-center items-center rounded-xl min-h-[80vh] p-3">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <div className="bg-base-200 rounded-xl min-h-[85vh] p-3">
          <h1 className="section-heading text-center">
            My Participated{" "}
            <span className="font-bold text-primary">Contests</span>
          </h1>
          <div className="overflow-x-auto mt-4">
            <table className="table">
              {/* head */}
              <thead className="">
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Name</th>
                  <th>Contest Type</th>
                  <th>Deadline</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {contests.map((contest, index) => (
                  <tr key={index} className="">
                    <td>{index + 1}</td>
                    <td>
                      {" "}
                      <div className="">
                        <div className=" h-20 rounded-lg object-cover overflow-hidden w-23">
                          <img
                            src={contest.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold text-lg">
                            {contest.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{contest.contest_type}</td>
                    <td>
                      <div className="font-bold text-md">
                        {new Date(contest.deadline).toDateString()}
                      </div>
                    </td>
                    <th>
                      <div className="badge badge-soft badge-primary">Paid</div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ParticipatedContests;

import React from "react";
import { FiTrash2 } from "react-icons/fi";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageContests = () => {
  const axiosSecure = useAxiosSecure();
  const { data: contests = [] } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests");
      return res.data;
    },
  });
  return (
    <div className="bg-base-200 rounded-xl min-h-[80vh] p-3">
      <h1 className="section-heading text-center">
        Manage <span className="font-bold text-primary">Contests</span>
      </h1>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Creator</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, index) => (
              <tr>
                <th>{index + 1}</th>
                <td className="font-semibold text-secondary">{contest.name}</td>
                <td className=" text-secondary">{contest.creatorEmail}</td>
                <td className=" text-secondary font-semibold">
                  {contest.contest_type}
                </td>
                <td className="font-semibold">
                  <div
                    className={`badge ${
                      contest.status === "pending"
                        ? "badge-warning"
                        : contest.status === "approved"
                        ? "badge-success"
                        : "badge-error"
                    }  badge-sm`}
                  >
                    {contest.status}
                  </div>
                </td>
                <td className="">
                  <div className="space-x-2">
                    <button className="btn btn-primary btn-xs">Approve</button>
                    <button className="btn  bg-yellow-500 btn-xs hover:brightness-95">
                      Reject
                    </button>
                    <button className="btn btn-warning btn-xs">
                      <FiTrash2 size={17} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContests;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const LeaderBoard = () => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, data = [] } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      const res = await axiosSecure.get("/leaderboard");
      return res.data;
    },
  });
  return (
    <>
      {isLoading ? (
        <div className="min-h-[55vh] flex items-center justify-center">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <div className="w-11/12 md:w-[700px] lg:w-6xl">
          <div className="text-center">
            <h1 className="section-heading mt-4">Leaderboard</h1>
            <p className="subtext">
              Meet the highest scorers and see how you rank among the best.
            </p>
          </div>
          <div data-aos="fade-up" className="overflow-x-auto w-full ">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Total Wins</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12 rounded-full">
                            <img
                              src={user.photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.displayName}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="">{user.email}</span>
                    </td>
                    <td>
                      <div className="badge badge-primary">
                        {user.totalWins}
                      </div>
                    </td>
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

export default LeaderBoard;

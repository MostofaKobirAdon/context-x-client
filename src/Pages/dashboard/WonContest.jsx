import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const WonContest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data } = useQuery({
    queryKey: ["won-contests", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/winners?email=${user?.email}`);
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
          <div className="">
            <h1 className="section-heading text-center">
              My <span className="text-primary font-bold">Won</span> Contests
            </h1>
            {data?.length === 0 ? (
              <div className="">
                <p className="text-yellow-600 mt-4 text-center">
                  You have no Won contsts. try more
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
                {" "}
                {data.map((contest, index) => (
                  <div
                    key={index}
                    className="bg-primary/10 p-5 rounded-lg border-2 border-primary h-35 flex flex-col justify-between"
                  >
                    <h2 className="font-semibold text-xl mb-3">
                      {contest.contestName} 
                    </h2>

                    <div className="flex items-center gap-4 pt-2 border-t-2 border-primary/50">
                      <span className="text-lg font-medium">Prize:</span>
                      <div className="badge badge-primary px-3 py-1 rounded-full">
                        {contest.prize_money}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WonContest;

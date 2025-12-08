import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ContestDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: contest = [] } = useQuery({
    queryKey: ["contest-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${id}`);
      return res.data;
    },
  });

  const { image, name, participantsCount, prize_money, deadline, description } =
    contest;
  console.log(new Date(deadline).getTime());
  return (
    <div className=" w-6xl mx-auto">
      <div className="mt-10 w-full  flex gap-10">
        <img
          src={image}
          alt=""
          className=" h-100 w-140 rounded-xl object-cover overflow-hidden"
        />
        <div className="">
          <h1 className="text-[34px] font-bold">{name}</h1>
          <p className="text-xl mt-3">
            <span className="font-semibold">Total Participants : </span>
            {participantsCount}
          </p>
          <div className="text-xl mt-1 flex items-center gap-1">
            <span className="font-semibold">Prize Money : </span>
            <div className="badge badge-soft badge-primary">${prize_money}</div>
          </div>
          <div className="text-xl mt-3">
            <span className="font-semibold">Deadline</span>
            {/* deadlin */}
            <div
              className="grid grid-flow-col gap-3 bg-base-300 rounded-xl mt-1
             p-3 text-center auto-cols-max"
            >
              <div className="flex w-23 items-center  flex-col p-1 bg-primary rounded-box text-neutral-content">
                <span className="countdown font-mono text-4xl">
                  <span
                    style={{ "--value": 25 } /* as React.CSSProperties */}
                    aria-live="polite"
                    // aria-label={counter}
                  >
                    15
                  </span>
                </span>
                days
              </div>
              <div className="flex w-23 items-center  flex-col p-1 bg-primary rounded-box text-neutral-content">
                <span className="countdown font-mono text-4xl">
                  <span
                    style={{ "--value": 25 } /* as React.CSSProperties */}
                    aria-live="polite"
                    // aria-label={counter}
                  >
                    15
                  </span>
                </span>
                hours
              </div>
              <div className="flex w-23 items-center  flex-col p-1 bg-primary rounded-box text-neutral-content">
                <span className="countdown font-mono text-4xl">
                  <span
                    style={{ "--value": 25 } /* as React.CSSProperties */}
                    aria-live="polite"
                    // aria-label={counter}
                  >
                    15
                  </span>
                </span>
                minuts
              </div>
              <div className="flex  w-23 items-center  flex-col p-1 bg-primary rounded-box text-neutral-content">
                <span className="countdown font-mono text-4xl">
                  <span
                    style={{ "--value": 25 } /* as React.CSSProperties */}
                    aria-live="polite"
                    // aria-label={counter}
                  >
                    15
                  </span>
                </span>
                seconds
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-4 border-t-2 border-gray-300">
        <div className="">
          <span className="font-semibold  text-2xl ">Description</span>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
        <div className="mt-4">
          <span className="font-semibold  text-2xl ">Task Instructions</span>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <button className="btn btn-primary w-40">Register / Pay</button>
        <button className="btn btn-primary w-40">Submit Task</button>
      </div>
    </div>
  );
};

export default ContestDetails;

import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ContestCard from "../components/ContestCard";

const AllContests = () => {
  const axiosSecure = useAxiosSecure();
  const { data: contests = [] } = useQuery({
    queryKey: ["all-contests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests");
      return res.data;
    },
  });
  return (
    <div>
      <div className="flex flex-col gap-y-10">
        <div className="mt-10 text-center">
          <h1 className="section-heading">
            Explore All{" "}
            <span className="text-primary font-bold"> Contests</span>{" "}
          </h1>
          <p className="subtext">
            Discover exciting challenges across coding, design, writing, and
            more. Join, compete, and showcase your skills!
          </p>
        </div>
        <div className="card-grid">
          {contests.map((contest, index) => (
            <ContestCard key={index} data={contest}></ContestCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllContests;

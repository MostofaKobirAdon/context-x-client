import React from "react";
import ContestCard from "../ContestCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const PopularContests = () => {
  const axiosSecure = useAxiosSecure();
  const { data: contests = [] } = useQuery({
    queryKey: ["popular-contests"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/popular-contests?limit=6&status=approved"
      );
      return res.data;
    },
  });

  return (
    <div>
      <div className="text-center">
        <h1 className="section-heading">
          Our <span className="font-bold text-primary">Popular</span> Contests
        </h1>
        <p className="subtext">
          Join the challenges everyone is talking about.
        </p>
      </div>
      <div className="card-grid">
        {contests.map((contest, index) => (
          <ContestCard key={index} data={contest}></ContestCard>
        ))}
      </div>
      <div className="w-full text-center mt-5">
        <Link to={"/contests"} className="btn btn-primary btn-outline  w-40">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default PopularContests;

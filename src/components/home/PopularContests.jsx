import React from "react";
import ContestCard from "../ContestCard";

const PopularContests = () => {
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
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <ContestCard></ContestCard>
        ))}
      </div>
      <div className="w-full text-center mt-5">
        <button className="btn btn-primary btn-outline  w-40">Show All</button>
      </div>
    </div>
  );
};

export default PopularContests;

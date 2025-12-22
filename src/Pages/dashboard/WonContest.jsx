import React from "react";

const WonContest = () => {
  return (
    <div className="bg-base-200 rounded-xl min-h-[85vh] p-3">
      <div className="">
        <h1 className="section-heading text-center">
          My <span className="text-primary font-bold">Won</span> Contests
        </h1>
        <div className="">
          {[1, 2, 3, 4, 5].map((p) => (
            <div className="bg-brimary/10 p-4 rounded-lg border">
              <h2 className="font-semibold text-xl mb-2">Contest {p}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WonContest;

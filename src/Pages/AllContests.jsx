import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ContestCard from "../components/ContestCard";

const AllContests = () => {
  const [activeTab, setActiveTab] = useState("all");
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    isLoading,
    data: contests = [],
  } = useQuery({
    queryKey: ["all-contests", activeTab],
    queryFn: async () => {
      const url =
        `/contests?status=approved` +
        (activeTab !== "all" ? `&type=${activeTab}` : "");
      const res = await axiosSecure.get(url);
      return res.data;
    },
  });

  return (
    <div>
      <div className="flex flex-col gap-y-10 min-h-[85vh]">
        <div data-aos="fade-down" className="mt-10 text-center">
          <h1 className="section-heading">
            Explore All{" "}
            <span className="text-primary font-bold"> Contests</span>
          </h1>
          <p className="subtext">
            Discover exciting challenges across coding, design, writing, and
            more.
          </p>
        </div>

        <div data-aos="fade-up" className="tabs tabs-border w-full">
          <input
            type="radio"
            name="tabs"
            className="tab"
            aria-label="All"
            defaultChecked
            onChange={() => setActiveTab("all")}
          />
          <input
            type="radio"
            name="tabs"
            className="tab"
            aria-label="Coding"
            onChange={() => setActiveTab("coding")}
          />
          <input
            type="radio"
            name="tabs"
            className="tab"
            aria-label="Writing"
            onChange={() => setActiveTab("writing")}
          />
          <input
            type="radio"
            name="tabs"
            className="tab"
            aria-label="Design"
            onChange={() => setActiveTab("design")}
          />
          <input
            type="radio"
            name="tabs"
            className="tab"
            aria-label="Gaming"
            onChange={() => setActiveTab("gaming")}
          />
        </div>

        {isLoading ? (
          <div className=" w-full flex justify-center items-center rounded-xl min-h-[41vh] ">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ) : (
          <div className="card-grid">
            {contests.map((contest) => (
              <ContestCard key={contest._id} data={contest} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllContests;

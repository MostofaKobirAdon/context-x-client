import React from "react";
import Banner from "../components/home/Banner";
import WinnerAdvertise from "../components/home/WinnerAdvertise";

const Home = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col gap-y-10">
      <Banner></Banner>
      <WinnerAdvertise></WinnerAdvertise>
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "../components/home/Banner";
import WinnerAdvertise from "../components/home/WinnerAdvertise";
import PopularContests from "../components/home/PopularContests";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <div className="flex  flex-col gap-y-10">
      <Banner></Banner>
      <PopularContests />
      <WinnerAdvertise></WinnerAdvertise>
      <WhyChooseUs />
    </div>
  );
};

export default Home;

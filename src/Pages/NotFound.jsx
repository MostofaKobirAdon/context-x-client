import React from "react";
import error from "../assets/not-found.gif";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="bg-[#EBF2FF] min-h-screen flex justify-center items-center">
      <div className="max-w-6xl relative w-full flex flex-col justify-center items-center gap-6 px-4">
        <img src={error} alt="" className="w-6/12" />
        <Link to={"/"} className="btn btn-primary absolute bottom-8">
          Go Back to Home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

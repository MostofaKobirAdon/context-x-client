import React from "react";
import img from "../assets/forbidden.gif";
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div>
      <div className="p-3 flex flex-col items-center justify-center gap-y-5">
        <img
          src={img}
          alt=""
          className=" w-110 mx-auto h-80 object-cover overflow-hidden"
        />

        <div className="space-x-2">
          <Link to={"/dashboard/my-profile"} className="btn btn-primary w-40">
            Go to Dashboard
          </Link>
          <Link to={"/"} className="btn btn-secondary w-40">
            Go to Home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;

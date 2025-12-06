import React from "react";
import logo from "../assets/logoSm.png";
import { Link } from "react-router";
const Logo = ({ isDark }) => {
  return (
    <Link to={"/"}>
      <div className="flex">
        <img src={logo} alt="" className="h-8.5 w-8.5" />
        <p
          className={`text-lg mt-1 font-medium ${
            isDark ? "text-white " : "text-black"
          }`}
        >
          contest<span className="text-xl text-primary">X</span>
        </p>
      </div>
    </Link>
  );
};

export default Logo;

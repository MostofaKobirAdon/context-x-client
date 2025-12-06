import React from "react";
import { Outlet } from "react-router";
import Logo from "../components/Logo";

const AuthLayout = () => {
  return (
    <div className=" min-h-screen ">
      <div className="max-w-6xl mx-auto ">
        <div className="py-3 px-3">
          <Logo></Logo>
        </div>

        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

import React from "react";
import { Outlet, useNavigate } from "react-router";
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";

const AuthLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return navigate("/");
  }
  return (
    <div className=" min-h-screen ">
      <div className="lg:max-w-6xl max-w-11/12 mx-auto ">
        <div className="py-2 px-3">
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

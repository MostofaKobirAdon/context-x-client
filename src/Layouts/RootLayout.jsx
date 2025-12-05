import React from "react";
import { Outlet } from "react-router";
import Nav from "../components/Nav";

const RootLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <div className=" mt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;

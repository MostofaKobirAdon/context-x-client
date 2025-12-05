import React from "react";
import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <Nav></Nav>
      <div className=" mt-16">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;

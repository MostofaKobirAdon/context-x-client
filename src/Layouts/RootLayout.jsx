import React from "react";
import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

const RootLayout = () => {
  const { loading } = useAuth();
  return (
    <div className="flex flex-col gap-y-10 ">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <>
          <Nav></Nav>
          <div className="max-w-6xl mx-auto mt-16 ">
            <Outlet />
          </div>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default RootLayout;

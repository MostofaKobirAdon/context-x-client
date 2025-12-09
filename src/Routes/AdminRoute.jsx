import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import { Navigate } from "react-router";
import Forbidden from "../Pages/Forbidden";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { isLoading, role } = useRole();

  if (loading || isLoading) {
    return (
      <div className="bg-base-200 rounded-xl flex justify-center items-center min-h-[80vh]">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  if (role !== "admin") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default AdminRoute;

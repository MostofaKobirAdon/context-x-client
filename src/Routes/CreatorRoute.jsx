import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Forbidden from "../Pages/Forbidden";

const CreatorRoute = ({ children }) => {
  const { loading } = useAuth();
  const { isLoading, role } = useRole();

  if (loading || isLoading) {
    return (
      <div className="bg-base-200 rounded-xl flex justify-center items-center min-h-[80vh]">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  if (role !== "creator") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default CreatorRoute;

import React from "react";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  return (
    <div className="bg-base-200 rounded-xl min-h-[85vh] p-3">
      <div className="flex flex-col items-center ">
        <div className="h-40 bg-linear-to-bl from-primary/70 to-purple-500/50 w-full rounded-t-xl"></div>
        <img
          src={user.photoURL}
          alt=""
          className="w-43 h-43 rounded-full -mt-20 object-cover overflow-hidden border-8 border-white "
        />
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-outline btn-primary w-45 mt-8">
          Update Profile{" "}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;

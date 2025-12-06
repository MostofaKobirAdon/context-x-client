import React from "react";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="h-40 bg-linear-to-bl from-primary/70 to-purple-500/50 w-full rounded-t-4xl"></div>
        <img
          src={user.photoURL}
          alt=""
          className="w-43 h-43 rounded-full -mt-20 object-cover overflow-hidden border-8 border-white "
        />
      </div>
    </div>
  );
};

export default MyProfile;

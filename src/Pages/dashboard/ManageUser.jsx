import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FiShieldOff } from "react-icons/fi";
import { LuPencilLine } from "react-icons/lu";
import { LuPencilOff } from "react-icons/lu";

import Swal from "sweetalert2";
import { FaRegUser } from "react-icons/fa";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    refetch,
    data: users = [],
  } = useQuery({
    queryKey: ["user-management"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${user.displayName} will be able in admin actions`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/${user._id}/role`, { role: "admin" })
          .then((res) => {
            Swal.fire({
              title: "Marked as Admin",
              text: `${user.displayName} has been marked as Admin`,
              icon: "success",
            });
            refetch();
          })
          .catch((err) => {
            Swal.fire({
              title: "Opps!",
              text: `${err.message}`,
              icon: "error",
            });
          });
      }
    });
  };
  const handleMakeCreator = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${user.displayName} will be able in creator actions`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/${user._id}/role`, { role: "creator" })
          .then((res) => {
            Swal.fire({
              title: "Marked as Creator",
              text: `${user.displayName} has been marked as Creator`,
              icon: "success",
            });
            refetch();
          })
          .catch((err) => {
            Swal.fire({
              title: "Opps!",
              text: `${err.message}`,
              icon: "error",
            });
          });
      }
    });
  };
  const handleMakeUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${user.displayName} will be marked as a normal user`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/${user._id}/role`, { role: "user" })
          .then((res) => {
            Swal.fire({
              title: "Marked as User",
              text: `${user.displayName} has been marked as User`,
              icon: "success",
            });
            refetch();
          })
          .catch((err) => {
            Swal.fire({
              title: "Opps!",
              text: `${err.message}`,
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <>
      {isLoading ? (
        <div className="bg-base-200 flex justify-center items-center rounded-xl min-h-[80vh] p-3">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <div className="bg-base-200 rounded-xl min-h-[80vh] p-3">
          <h1 className="section-heading text-center">
            Manage <span className="font-bold text-primary">Users</span>
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Admin Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-circle h-12 w-12">
                            <img
                              src={user.photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.displayName}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td className="font-bold">{user.role}</td>
                    <th>
                      <div className="space-x-2 flex">
                        {/* {user.role === "user" || user.role === "creator" ? (
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn btn-primary btn-xs"
                          >
                            <MdAdminPanelSettings size={17} />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleRemoveAdmin(user)}
                            className="btn btn-warning btn-xs"
                          >
                            <FiShieldOff size={17} />
                          </button>
                        )}
                        {user.role === "admin" || user.role === "user" ? (
                          <button className="btn bg-indigo-600 text-white btn-xs">
                            <LuPencilLine size={17} />
                          </button>
                        ) : (
                          <button className="btn bg-red-600 text-gray-50 btn-xs">
                            <LuPencilOff size={17} />
                          </button>
                        )} */}

                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className={`btn btn-primary ${
                            user.role === "admin" ? "hidden" : "block"
                          } btn-xs`}
                        >
                          <MdAdminPanelSettings size={17} />
                        </button>
                        <button
                          onClick={() => handleMakeCreator(user)}
                          className={`btn bg-indigo-600 ${
                            user.role === "creator" ? "hidden" : "block"
                          } text-white btn-xs`}
                        >
                          <LuPencilLine size={17} />
                        </button>
                        <button
                          onClick={() => handleMakeUser(user)}
                          className={`btn bg-sky-600 ${
                            user.role === "user" ? "hidden" : "block"
                          } text-white btn-xs`}
                        >
                          <FaRegUser size={17} />
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageUser;

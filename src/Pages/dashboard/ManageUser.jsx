import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
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
  const handleRemoveAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${user.displayName} will not be able in admin actions`,
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
              title: "Removed from Admin",
              text: `${user.displayName} has been removed from Admin`,
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
            {users.map((user) => (
              <tr key={user._id}>
                <td>1</td>
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
                <td>{user.role}</td>
                <th>
                  {user.role === "user" ? (
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
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;

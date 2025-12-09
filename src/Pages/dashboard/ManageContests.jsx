import React from "react";
import { FiTrash2 } from "react-icons/fi";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageContests = () => {
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    data: contests = [],
    refetch,
  } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests");
      return res.data;
    },
  });
  const handleApprove = (contest) => {
    axiosSecure
      .patch(`/contests/${contest._id}/status`, {
        status: "approved",
      })
      .then((res) => {
        Swal.fire({
          title: "Marked as Approved",
          text: "Contest has been marked as Approved",
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
  };
  const handleReject = (contest) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${contest.name} will be marked as Rejected`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/contests/${contest._id}/status`, { status: "rejected" })
          .then((res) => {
            Swal.fire({
              title: "Marked as Rejected",
              text: `${contest.name} has been marked as Rejected`,
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
            Manage <span className="font-bold text-primary">Contests</span>
          </h1>
          <div className="overflow-x-auto mt-4">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Creator</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contests.map((contest, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td className="font-semibold text-secondary">
                      {contest.name}
                    </td>
                    <td className=" text-secondary">{contest.creatorEmail}</td>
                    <td className=" text-secondary font-semibold">
                      {contest.contest_type}
                    </td>
                    <td className="font-semibold">
                      <div
                        className={`badge ${
                          contest.status === "pending"
                            ? "badge-warning"
                            : contest.status === "approved"
                            ? "badge-success"
                            : "badge-error"
                        }  badge-sm`}
                      >
                        {contest.status}
                      </div>
                    </td>
                    <td className="">
                      <div className="space-x-2 flex ">
                        <button
                          onClick={() => handleApprove(contest)}
                          className={`btn btn-primary ${
                            contest.status === "approved" && "hidden"
                          } btn-xs`}
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(contest)}
                          className={`btn ${
                            contest.status === "rejected" && "hidden"
                          } bg-yellow-500 btn-xs hover:brightness-95`}
                        >
                          Reject
                        </button>
                        <button className="btn btn-warning btn-xs">
                          <FiTrash2 size={17} />
                        </button>
                      </div>
                    </td>
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

export default ManageContests;

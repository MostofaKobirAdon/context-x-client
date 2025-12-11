import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdModeEditOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyCreatedContests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: contests = [] } = useQuery({
    queryKey: ["created-contests", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/contests?creatorEmail=${user?.email}`
      );
      return res.data;
    },
  });
  const handleDeleteContest = (contest) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${contest.name} will be deleted and lost`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/contests/${contest._id}`)
          .then((res) => {
            Swal.fire({
              title: "Contests Deleted",
              text: `${contest.name} has been Deleted`,
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
        My Created <span className="font-bold text-primary">Contests</span>
      </h1>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, index) => (
              <tr>
                <th>{index + 1}</th>
                <td className="font-medium text-secondary">{contest.name}</td>
                <td>
                  <div
                    className={`badge ${
                      contest.status === "approved"
                        ? "badge-success"
                        : "badge-warning"
                    } badge-success`}
                  >
                    {contest.status}
                  </div>
                </td>
                <td className="space-x-2">
                  <Link
                    to={`/dashboard/edit-contest/${contest._id}`}
                    disabled={contest.status !== "pending" && true}
                    className="btn btn-sm btn-primary text-white "
                  >
                    <MdModeEditOutline size={20} />
                  </Link>
                  <button
                    onClick={() => handleDeleteContest(contest)}
                    disabled={contest.status !== "pending" && true}
                    className="btn btn-sm btn-warning text-white "
                  >
                    <FaRegTrashAlt size={20} />
                  </button>
                </td>
                <td>
                  <button className="btn-primary btn btn-sm">
                    See Submissions
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCreatedContests;

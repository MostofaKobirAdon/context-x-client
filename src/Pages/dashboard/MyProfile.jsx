import React, { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaRegEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import useWinPercentage from "../../hooks/useWinPercentage";

const MyProfile = () => {
  const { user, updateUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["user-by-email", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  const [showIcon, setShowIcon] = useState(false);
  const moadlRef = useRef();
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      bio: "",
      name: "",
      image: "",
    },
  });
  const handleOpenMoadl = () => {
    moadlRef.current.showModal();
  };
  useEffect(() => {
    if (data) {
      reset({
        bio: data.bio || "",
        name: user.displayName || data.displayName || "",
        image:
          user.photoURL ||
          data.photoURL ||
          "https://i.ibb.co.com/G4p6n29q/download.png",
      });
    }
  }, [user, data, reset]);

  const handleUpdateProfile = (data) => {
    moadlRef.current.close();
    const { name, image, bio } = data;
    const updateInfo = { displayName: name, photoURL: image };
    updateUser(updateInfo)
      .then((res) => {
        axiosSecure
          .patch(`/users/${user?.email}`, { name, image, bio })
          .then((res) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Profile has been updated",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${err.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const { winData, isLoading } = useWinPercentage();
  const chartData = [
    { name: "Participated", value: 100 - winData?.winPercentage },
    { name: "Won", value: winData?.winPercentage },
  ];
  return (
    <>
      {" "}
      {isLoading ? (
        <div className="bg-base-200 flex justify-center items-center rounded-xl min-h-[80vh] p-3">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
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
            <button
              onClick={handleOpenMoadl}
              className="btn btn-outline btn-primary w-45 mt-8"
            >
              Update Profile{" "}
            </button>
          </div>
          <div className=" flex justify-center  items center">
            <div className="">
              <PieChart width={400} height={120}>
                <Pie
                  data={chartData}
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  cx="50%"
                  cy="100%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? "#c0c4e8ff" : "#4c46e9ff"}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
              <p className="text-lg text-center font-semibold">
                Winning Percentage
              </p>
            </div>
          </div>

          <dialog ref={moadlRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h1 className="text-2xl font-semibold">
                Update Your{" "}
                <span className="text-primary font-bold">Profile</span>
              </h1>
              <form
                onSubmit={handleSubmit(handleUpdateProfile)}
                className="flex flex-col mt-1"
              >
                <div className="">
                  <div className="relative">
                    <img
                      src={user.photoURL}
                      alt=""
                      onMouseEnter={() => setShowIcon(true)}
                      onMouseLeave={() => setShowIcon(false)}
                      className={`w-22 border-2 object-cover overflow-hidden border-primary ${
                        showIcon ? "brightness-75" : "brightness-100"
                      } rounded-full transform h-22`}
                    />
                    <FaRegEdit
                      fill="white"
                      size={20}
                      className={`absolute bottom-4 ${
                        showIcon ? "block" : "hidden"
                      } left-20`}
                    />
                  </div>
                </div>

                <label htmlFor="" className="label">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  className="input w-full"
                  placeholder="Your Name"
                />
                <label htmlFor="" className="label">
                  Choose image
                </label>
                <input
                  {...register("image")}
                  type="text"
                  className="input w-full"
                  placeholder="Photo Url"
                />
                <label htmlFor="" className="label mt-1">
                  Bio
                </label>
                <textarea
                  {...register("bio")}
                  className="textarea w-full"
                  placeholder="Bio"
                ></textarea>
                <button className="btn btn-primary mt-1">Update</button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};

export default MyProfile;

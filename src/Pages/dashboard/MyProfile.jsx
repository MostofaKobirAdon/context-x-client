import React, { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaRegEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyProfile = () => {
  const { user, updateUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [showIcon, setShowIcon] = useState(false);
  const moadlRef = useRef();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const fileInputRef = useRef();
  const handleOpenMoadl = () => {
    moadlRef.current.showModal();
  };

  const handleUpdateProfile = (data) => {
    const { name, image, bio } = data;
    const file = image[0];

    const formData = new FormData();
    formData.append("image", file);
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_APIKEY
        }`,
        formData
      )
      .then((res) => {
        const photoUrl = res.data.data.url;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then((res) => {
            axiosSecure
              .patch("/users", {
                displayName: name,
                photoURL: photoUrl,
              })
              .then((res) => {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Account updated successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
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
        <button
          onClick={handleOpenMoadl}
          className="btn btn-outline btn-primary w-45 mt-8"
        >
          Update Profile{" "}
        </button>
      </div>

      <dialog ref={moadlRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box ">
          <h1 className="text-2xl font-semibold">
            Update Your <span className="text-primary font-bold">Profile</span>
          </h1>
          <form
            onSubmit={handleSubmit(handleUpdateProfile)}
            className="flex flex-col mt-2"
          >
            <div className="">
              <div className="relative">
                <img
                  src={user.photoURL}
                  alt=""
                  onMouseEnter={() => setShowIcon(true)}
                  onMouseLeave={() => setShowIcon(false)}
                  className={`w-28 border-2 object-cover overflow-hidden border-primary ${
                    showIcon ? "brightness-75" : "brightness-100"
                  } rounded-full transform h-28`}
                />
                <FaRegEdit
                  fill="white"
                  size={20}
                  className={`absolute bottom-4 ${
                    showIcon ? "block" : "hidden"
                  } left-20`}
                />
              </div>
              <label htmlFor="" className="label">
                Choose image
              </label>
              <input
                {...register("image")}
                type="file"
                ref={fileInputRef}
                className="file-input w-full"
              />
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
            <label htmlFor="" className="label mt-2">
              Bio
            </label>
            <textarea
              {...register("bio")}
              className="textarea w-full"
              placeholder="Bio"
            ></textarea>
            <button className="btn btn-primary mt-2">Update</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyProfile;

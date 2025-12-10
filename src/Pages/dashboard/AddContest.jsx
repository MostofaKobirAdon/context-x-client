import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddContest = () => {
  const [selectedDate, setSelectedDate] = useState();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddContest = (data) => {
    setLoading(true);

    const newContest = {
      ...data,
      deadline: selectedDate,
      creatorName: user.displayName,
      creatorEmail: user.email,
    };

    axiosSecure
      .post("contests", newContest)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "New Contest has been added",
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
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading ? (
        <div className="bg-base-200  rounded-xl flex justify-center items-center min-h-[80vh]">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <div className="bg-base-200  rounded-xl  py-3">
          <h1 className="text-3xl font-bold text-center mb-2">
            Add a <span className="text-primary">Contest</span>
          </h1>

          <form onSubmit={handleSubmit(handleAddContest)} className="">
            <div className="flex gap-10 justify-between max-w-11/12 mx-auto ">
              <div className="w-1/2 space-y-2.5">
                {" "}
                <div className="flex flex-col w-full">
                  <label className="label font-medium">Contest Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Contest Name"
                    className="input input-bordered w-full"
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-xs  text-red-500">
                      this field is requird
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className="label font-medium">Prize Money</label>
                  <input
                    {...register("prize_money", { required: true })}
                    type="number"
                    placeholder="Prize amount"
                    className="input input-bordered w-full"
                  />
                  {errors.prize_money?.type === "required" && (
                    <p className="text-xs  text-red-500">
                      this field is requird
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className="label font-medium">Contest Type</label>
                  <select
                    {...register("contest_type", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option value={""}>Select contest type</option>
                    <option value={"coding"}>Coding</option>
                    <option value={"design"}>Design</option>
                    <option value={"gaming"}>Gaming</option>
                    <option value={"video"}>Video</option>
                    <option value={"writing"}>Writing</option>
                  </select>
                  {errors.contest_type?.type === "required" && (
                    <p className="text-xs  text-red-500">
                      this field is requird
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className="label font-medium">Description</label>
                  <textarea
                    {...register("description", { required: true })}
                    className="textarea textarea-bordered h-28 w-full"
                    placeholder="Short description about contest"
                  ></textarea>
                  {errors.description?.type === "required" && (
                    <p className="text-xs  text-red-500">
                      this field is requird
                    </p>
                  )}
                </div>
              </div>
              <div className=" w-1/2 space-y-2.5">
                <div className="flex flex-col w-full">
                  <label className="label font-medium">Photo URL</label>
                  <input
                    {...register("image", { required: true })}
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                  {errors.image?.type === "required" && (
                    <p className="text-xs  text-red-500">
                      this field is requird
                    </p>
                  )}
                </div>

                <div className="flex flex-col w-full">
                  <label className="label font-medium">Price</label>
                  <input
                    {...register("entry_fee", { required: true })}
                    type="number"
                    placeholder="Entry fee"
                    className="input input-bordered w-full"
                  />
                  {errors.entry_fee?.type === "required" && (
                    <p className="text-xs  text-red-500">
                      this field is requird
                    </p>
                  )}
                </div>

                <div className="flex flex-col w-full">
                  <label className="label font-medium">Deadline</label>
                  <DatePicker
                    required
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="input w-full"
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
                    isClearable={true}
                    placeholderText="Select a date"
                  ></DatePicker>
                </div>

                <div className="flex flex-col w-full">
                  <label className="label font-medium">Task Instruction</label>
                  <textarea
                    {...register("instructions", { required: true })}
                    className="textarea textarea-bordered h-28 w-full"
                    placeholder="Contest instructions"
                  ></textarea>
                  {errors.instructions?.type === "required" && (
                    <p className="text-xs  text-red-500">
                      this field is requird
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="md:col-span-2 text-center mt-3">
              <button className="btn btn-primary w-40 text-white">
                Add Contest
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddContest;

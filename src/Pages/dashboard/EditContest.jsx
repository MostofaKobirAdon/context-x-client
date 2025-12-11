import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EditContest = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { data: contest = {} } = useQuery({
    queryKey: ["edit-contest", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${id}`);
      return res.data;
    },
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddContest = (data) => {
    axiosSecure
      .patch(`/contests/${contest._id}`, { ...data, deadline: selectedDate })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/my-created-contests");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const {
    name,
    image,
    description,
    prize_money,
    entry_fee,
    instructions,
    deadline,
    contest_type,
  } = contest || {};
  useEffect(() => {
    if (deadline) {
      setSelectedDate(deadline);
    }
  }, [deadline]);
  return (
    <div className="bg-base-200  rounded-xl  py-3">
      <h1 className="text-3xl font-bold text-center mb-2">
        Edit <span className="text-primary">Contest</span>
      </h1>

      <form onSubmit={handleSubmit(handleAddContest)} className="">
        <div className="flex gap-10 justify-between max-w-11/12 mx-auto ">
          <div className="w-1/2 space-y-2.5">
            {" "}
            <div className="flex flex-col w-full">
              <label className="label font-medium">Contest Name</label>
              <input
                defaultValue={name}
                {...register("name", { required: true })}
                type="text"
                placeholder="Contest Name"
                className="input input-bordered w-full"
              />
              {errors.name?.type === "required" && (
                <p className="text-xs  text-red-500">this field is requird</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label className="label font-medium">Prize Money</label>
              <input
                defaultValue={prize_money}
                {...register("prize_money", { required: true })}
                type="number"
                placeholder="Prize amount"
                className="input input-bordered w-full"
              />
              {errors.prize_money?.type === "required" && (
                <p className="text-xs  text-red-500">this field is requird</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label className="label font-medium">Contest Type</label>
              <select
                {...register("contest_type", { required: true })}
                className="select select-bordered w-full"
              >
                <option value={""}>Select contest type</option>
                {["coding", "design", "gaming", "writing"].map((type) => (
                  <option
                    selected={contest_type === type ? true : false}
                    value={type}
                  >
                    {type}
                  </option>
                ))}
              </select>
              {errors.contest_type?.type === "required" && (
                <p className="text-xs  text-red-500">this field is requird</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label className="label font-medium">Description</label>
              <textarea
                defaultValue={description}
                {...register("description", { required: true })}
                className="textarea textarea-bordered h-28 w-full"
                placeholder="Short description about contest"
              ></textarea>
              {errors.description?.type === "required" && (
                <p className="text-xs  text-red-500">this field is requird</p>
              )}
            </div>
          </div>
          <div className=" w-1/2 space-y-2.5">
            <div className="flex flex-col w-full">
              <label className="label font-medium">Photo</label>

              <input
                defaultValue={image}
                placeholder="Image"
                {...register("image", { required: true })}
                type="text"
                className="input input-bordered w-full"
              />
              {errors.image?.type === "required" && (
                <p className="text-xs  text-red-500">this field is requird</p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label className="label font-medium">Price</label>
              <input
                defaultValue={entry_fee}
                {...register("entry_fee", { required: true })}
                type="number"
                placeholder="Entry fee"
                className="input input-bordered w-full"
              />
              {errors.entry_fee?.type === "required" && (
                <p className="text-xs  text-red-500">this field is requird</p>
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
                defaultValue={instructions}
                {...register("instructions", { required: true })}
                className="textarea textarea-bordered h-28 w-full"
                placeholder="Contest instructions"
              ></textarea>
              {errors.instructions?.type === "required" && (
                <p className="text-xs  text-red-500">this field is requird</p>
              )}
            </div>
          </div>
        </div>
        <div className="md:col-span-2 text-center mt-3">
          <button className="btn btn-primary w-40 text-white">
            Update Contest
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContest;

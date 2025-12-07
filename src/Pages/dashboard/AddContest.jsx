import React from "react";
import { useForm } from "react-hook-form";

const AddContest = () => {
  const { register, reset, handleSubmit } = useForm();

  return (
    <div className="bg-base-200  rounded-xl  py-3">
      <h1 className="text-3xl font-bold text-center mb-2">
        Add a <span className="text-primary">Contest</span>
      </h1>

      <form className="">
        <div className="flex gap-10 justify-between max-w-11/12 mx-auto ">
          <div className="w-1/2 space-y-2.5">
            {" "}
            {/* Contest Name */}
            <div className="flex flex-col w-full">
              <label className="label font-medium">Contest Name</label>
              <input
                type="text"
                placeholder="Contest Name"
                className="input input-bordered w-full"
              />
            </div>
            {/* Prize Money */}
            <div className="flex flex-col w-full">
              <label className="label font-medium">Prize Money</label>
              <input
                type="number"
                placeholder="Prize amount"
                className="input input-bordered w-full"
              />
            </div>
            {/* Contest Type */}
            <div className="flex flex-col w-full">
              <label className="label font-medium">Contest Type</label>
              <select className="select select-bordered w-full">
                <option>Select contest type</option>
                <option>Coding</option>
                <option>Design</option>
                <option>Gaming</option>
                <option>Short Video</option>
              </select>
            </div>
            {/* Description */}
            <div className="flex flex-col w-full">
              <label className="label font-medium">Description</label>
              <textarea
                className="textarea textarea-bordered h-28 w-full"
                placeholder="Short description about contest"
              ></textarea>
            </div>
          </div>
          <div className=" w-1/2 space-y-2.5">
            {/* Image URL */}
            <div className="flex flex-col w-full">
              <label className="label font-medium">Image URL</label>
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </div>

            {/* Price */}
            <div className="flex flex-col w-full">
              <label className="label font-medium">Price</label>
              <input
                type="number"
                placeholder="Entry fee"
                className="input input-bordered w-full"
              />
            </div>

            {/* Deadline */}
            <div className="flex flex-col w-full">
              <label className="label font-medium">Deadline</label>
              <input
                type="datetime-local"
                className="input input-bordered w-full"
              />
            </div>

            {/* Task Instruction */}
            <div className="flex flex-col w-full">
              <label className="label font-medium">Task Instruction</label>
              <textarea
                className="textarea textarea-bordered h-28 w-full"
                placeholder="What participants must do"
              ></textarea>
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
  );
};

export default AddContest;

import React from "react";

const ContestCard = () => {
  return (
    <div className="card bg-primary/10 p-4 h-88 rounded-lg shadow-lg">
      <img
        src="https://i.ibb.co.com/Zp4pL836/Programming-amico-1.png"
        alt="Shoes"
        className="h-[50%]  rounded-lg object-cover overflow-hidden"
      />
      <div className=" h-1/2 flex flex-col justify-between gap-2 p-0 mt-2">
        <h2 className="font-semibold text-[17px]">Web Development Contest</h2>
        <p className="text-sm  text-gray-600 ">
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-bold">Prticipants :</span> 1002
        </p>
        <div className=" justify-end w-full">
          <button className="btn btn-primary w-full">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;

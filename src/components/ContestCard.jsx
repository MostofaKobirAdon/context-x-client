import React from "react";
import { Link } from "react-router";

const ContestCard = ({ data }) => {
  const { _id, name, description, participantsCount, image } = data;
  const formatString = (string) => {
    if (string.length <= 90) {
      return string;
    } else {
      const formatedText = string.slice(0, 92) + "...";
      return formatedText;
    }
  };
  return (
    <div className="card bg-primary/10 p-4 h-88 rounded-lg shadow-lg">
      <img
        src={image}
        alt="Shoes"
        className="h-[50%]  rounded-lg object-cover overflow-hidden"
      />
      <div className=" h-1/2 flex flex-col justify-between gap-2 p-0 mt-2">
        <h2 className="font-semibold text-[17px]">{name}</h2>
        <p className="text-sm  text-gray-600 ">{formatString(description)}</p>
        <p className="text-sm text-gray-600">
          <span className="font-bold">Prticipants :</span> {participantsCount}
        </p>
        <div className=" justify-end w-full">
          <Link to={`/contests/${_id}`} className="btn btn-primary w-full">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;

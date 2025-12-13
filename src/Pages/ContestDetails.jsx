import React, { useRef, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Countdown from "react-countdown";
import useAuth from "../hooks/useAuth";

const ContestDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const modalRef = useRef();
  const [ended, setEnded] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: contest = [] } = useQuery({
    queryKey: ["contest-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${id}`);
      return res.data;
    },
  });
  const handleOpenMoadl = () => {
    modalRef.current.showModal();
  };
  const {
    _id,
    image,
    name,
    participantsCount,
    entry_fee,
    prize_money,
    deadline,
    description,
  } = contest;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      setEnded(true);
      return (
        <div className="text-red-500 font-bold text-xl mt-2">
          Deadlin is over
        </div>
      );
    }

    return (
      <>
        <span className="font-semibold">Deadline :</span>
        <div className="grid grid-cols-4 gap-3 bg-base-300 rounded-xl mt-1 p-3 text-center auto-cols-max">
          <div className="flex w-22 flex-col p-2 bg-primary text-neutral-content rounded-box">
            <span className="font-medium text-3xl">{days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex w-22 flex-col p-2 bg-primary text-neutral-content rounded-box">
            <span className="font-medium text-3xl">{hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex w-22 flex-col p-2 bg-primary text-neutral-content rounded-box">
            <span className="font-medium text-3xl">{minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex w-22 flex-col p-2 bg-primary text-neutral-content rounded-box">
            <span className="font-medium text-3xl">{seconds}</span>
            <span className="text-sm">seconds</span>
          </div>
        </div>
      </>
    );
  };
  const handlePay = async () => {
    const paymentInfo = {
      cost: entry_fee,
      contestId: _id,
      participantEmail: user.email,
      contestName: name,
    };
    const res = await axiosSecure.post(
      "/payment-checkout-session",
      paymentInfo
    );
    window.location.href = res.data.url;
  };
  return (
    <>
      {isLoading ? (
        <div className=" w-full flex justify-center items-center rounded-xl min-h-[41vh] ">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <div className=" w-6xl mx-auto">
          <div className="mt-10 w-full  flex gap-10">
            <img
              src={image}
              alt=""
              className=" h-100 w-140 rounded-xl object-cover overflow-hidden"
            />
            <div className="">
              <h1 className="text-[34px] font-bold">{name}</h1>
              <p className="text-xl mt-2">
                <span className="font-semibold">Total Participants : </span>
                {participantsCount}
              </p>
              <div className="text-xl mt-1 flex items-center gap-1">
                <span className="font-semibold">Prize Money : </span>
                <div className="badge badge-soft badge-primary">
                  ${prize_money}
                </div>
              </div>
              <div className="text-xl mt-1">
                <Countdown date={deadline} renderer={renderer}></Countdown>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t-2 border-gray-300">
            <div className="">
              <span className="font-semibold  text-2xl ">Description</span>
              <p className="text-gray-600 mt-1">{description}</p>
            </div>
            <div className="mt-4">
              <span className="font-semibold  text-2xl ">
                Task Instructions
              </span>
              <p className="text-gray-600 mt-1">{description}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={handlePay}
              disabled={ended}
              className="btn btn-primary w-40"
            >
              Register / Pay
            </button>
            <button onClick={handleOpenMoadl} className="btn btn-primary w-40">
              Submit Task
            </button>
          </div>

          {/* heer is th modal */}
          <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box h-90">
              <h3 className="font-semibold text-xl">
                Submit <span className="text-primary font-bold">Task</span>
              </h3>
              <p className="py-4 text-sm text-gray-500">
                Write aboutyour submission or necessary links
              </p>
              <textarea
                className="textarea min-h-40 w-full"
                placeholder="Description or necessary links"
              ></textarea>
              <div className="modal-action">
                <button className="btn btn-primary">Submit</button>
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

export default ContestDetails;

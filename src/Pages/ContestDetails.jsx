import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Countdown from "react-countdown";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const ContestDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const modalRef = useRef();
  const [ended, setEnded] = useState(false);
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    isLoading,
    data: contest = [],
  } = useQuery({
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
    participants,
  } = contest;
  const participantPaid = participants?.find((p) => p.email === user?.email);
  useEffect(() => {
    if (participantPaid) {
      setPaid(true);
    }
    if (contest.isEnded === true) {
      setEnded(true);
    }
  }, [participants, user, participantPaid, contest]);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="text-red-500 font-bold text-xl mt-2">
          Deadlin is over
        </div>
      );
    }

    return (
      <>
        <span className="font-semibold">Deadline :</span>
        <div className="grid grid-cols-4 gap-2 md:gap-3 bg-base-300 rounded-xl mt-1 p-3 text-center auto-cols-max">
          <div className="flex md:w-22 flex-col p-2 bg-primary text-neutral-content rounded-box">
            <span className="font-medium text-3xl">{days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex  md:w-22 flex-col p-2 bg-primary text-neutral-content rounded-box">
            <span className="font-medium text-3xl">{hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex  md:w-22 flex-col p-2 bg-primary text-neutral-content rounded-box">
            <span className="font-medium text-3xl">{minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex  md:w-22 flex-col p-2 bg-primary text-neutral-content rounded-box">
            <span className="font-medium text-3xl">{seconds}</span>
            <span className="text-sm">seconds</span>
          </div>
        </div>
      </>
    );
  };
  const handlePay = async () => {
    if (paid) {
      return Swal.fire({
        title: "Already Paid",
        text: "You're already paid.",
        icon: "warning",
      });
    }
    Swal.fire({
      title: "Are you sure?",
      text: `You will be charged $${entry_fee}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
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
      }
    });
  };
  const handleSubmitTask = (data) => {
    modalRef.current.close();
    const submissionData = {
      contestId: contest._id,
      contestName: contest.name,
      contestIsEnded: contest.isEnded,
      creatorEmail: contest.creatorEmail,
      submissionText: data.submissionText,
      submittedAt: new Date(),
      participantEmail: user.email,
      participantName: user.displayName,
    };

    axiosSecure
      .post("/submissions", submissionData)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Taks has been submitted",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleDeadlineCompletion = () => {
    setEnded(true);
    axiosSecure
      .patch(`/contests/${contest._id}/isEnded`, { isEnded: true })
      .then((res) => {
        console.log("deadline ending updated");
      })
      .catch((err) => console.log(err));
    refetch();
  };
  return (
    <>
      {isLoading || loading ? (
        <div className=" w-full flex justify-center items-center rounded-xl min-h-[41vh] ">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <div className=" mx-auto">
          <div className="mt-10 w-full  md:flex gap-10">
            <img
              src={image}
              alt=""
              className=" h-100 md:w-140 rounded-xl object-cover overflow-hidden"
            />
            <div className="">
              <h1 className="text-2xl md:text-[34px] font-bold">{name}</h1>
              <p className="text-xl mt-2">
                <span className="font-semibold">Total Participants : </span>
                {participantsCount}
              </p>
              <div className="text-xl mt-1 flex items-center gap-1">
                <span className="font-semibold">Prize Money : </span>
                <div className="badge  badge-soft badge-primary">
                  ${prize_money}
                </div>
              </div>
              <div className="text-xl mt-1">
                <Countdown
                  onComplete={handleDeadlineCompletion}
                  date={deadline}
                  renderer={renderer}
                ></Countdown>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t-2 border-gray-300">
            <div className="">
              <span className="font-semibold  text-2xl ">Description</span>
              <p className="text-secondary mt-1">{description}</p>
            </div>
            <div className="mt-4">
              <span className="font-semibold  text-2xl ">
                Task Instructions
              </span>
              <p className="text-secondary mt-1">{description}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={handlePay}
              disabled={ended || paid}
              className="btn btn-primary w-40"
            >
              Register / Pay
            </button>
            <button
              disabled={!paid || ended}
              onClick={handleOpenMoadl}
              className="btn btn-primary w-40"
            >
              Submit Task
            </button>
          </div>

          {/* heer is th modal */}
          <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box h-85 relative">
              <h3 className="font-semibold text-xl">
                Submit <span className="text-primary font-bold">Task</span>
              </h3>
              <p className="py-4 text-sm text-gray-500">
                Write about your submission or necessary links
              </p>
              <form onSubmit={handleSubmit(handleSubmitTask)}>
                <textarea
                  {...register("submissionText", { required: true })}
                  className="textarea min-h-40 w-full"
                  placeholder="Description or necessary links"
                ></textarea>
                {errors.submissionText?.type === "required" && (
                  <p className="text-xs text-error">Please Fill This Form</p>
                )}
                <button
                  type="submit"
                  className="btn btn-primary absolute right-25 bottom-6"
                >
                  Submit
                </button>
              </form>

              <div className="modal-action absolute bottom-6 right-6">
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

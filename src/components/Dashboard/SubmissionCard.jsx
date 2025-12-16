import React, { useRef } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SubmissionCard = ({ data }) => {
  const axiosSecure = useAxiosSecure();
  const formatString = (string) => {
    if (string.length <= 50) {
      return string;
    } else {
      const formatedText = string.slice(0, 52) + "...";
      return formatedText;
    }
  };
  const {
    contestName,
    submissionText,
    submittedAt,
    participantName,
    participantEmail,
  } = data;
  const modalRef = useRef();
  const handleDeclareWinner = () => {
    modalRef.current.close();
    const winnerData = {
      email: data.participantEmail,
      name: data.participantName,
    };
    Swal.fire({
      title: "Are you sure?",
      text: `${data.participantName} will be delared as winner`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/contests/${data.contestId}/winner`, winnerData)
          .then((res) => {
            Swal.fire({
              title: "Winner declared",
              text: "participant has been declared as winner",
              icon: "success",
            });
          })
          .catch((err) => {
            Swal.fire({
              title: "oops!",
              text: err.message,
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <div className="px-2 h-42 py-3 rounded-xl bg-primary/5 hover:scale-101 transform ease-in-out duration-100 hover:shadow-md">
      <h2 className="font-semibold text-lg border-b border-gray-600 mb-1">
        {contestName}
      </h2>
      <p className="text-sm font-medium mt-2 ">Description or Links :</p>
      <p className="text-secondary-content">{formatString(submissionText)}</p>
      <p className="">
        <span className="font-bold">Submitted At :</span>{" "}
        {new Date(submittedAt).toDateString()}
      </p>
      <button
        onClick={() => modalRef.current.showModal()}
        className="btn btn-primary btn-outline btn-sm mt-2 px-8"
      >
        Details
      </button>

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box ">
          <h3 className="font-bold text-lg border-b border-gray-500">
            {contestName}
          </h3>
          <p className="text-sm font-medium mt-2.5 ">Description or Links :</p>
          <p className="text-secondary">{submissionText}</p>
          <div className="bg-primary/10 p-2 py-3 rounded-2xl mt-2">
            <p className="">
              <span className="font-bold">Participant Name :</span>{" "}
              {participantName}
            </p>
            <p className="">
              <span className="font-bold">Participant Email :</span>{" "}
              {participantEmail}
            </p>
          </div>
          <div className="modal-action">
            <button onClick={handleDeclareWinner} className="btn btn-primary">
              Declare as Winner !
            </button>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SubmissionCard;

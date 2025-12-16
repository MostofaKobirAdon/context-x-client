import React, { useEffect } from "react";
import img from "../../assets/pay.png";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const PaymentSuccess = () => {
  const [SearchParams] = useSearchParams();
  const { user } = useAuth();
  const sessionId = SearchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (sessionId) {
      const participantData = {
        email: user.email,
        name: user.displayName,
      };
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`, participantData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <div className="bg-base-200 rounded-xl min-h-[80vh] flex flex-col items-center  justify-center p-3">
      <div className=" text-center md:w-1/2">
        <h1 className="section-heading">
          Payment <span className="font-bold text-primary">Successful</span>
        </h1>
        <p className="subtext mt-3">
          Payment Successful! Now You can make the solution of the contest and
          provide in the submission
        </p>
      </div>
      <img
        src={img}
        alt=""
        className="md:w-400  md:h-90  object-cover overflow-hidden  "
      />
    </div>
  );
};

export default PaymentSuccess;

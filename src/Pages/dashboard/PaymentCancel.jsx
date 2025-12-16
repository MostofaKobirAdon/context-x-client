import React from "react";
import img from "../../assets/pay-failed.png";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
    <div className="bg-base-200 rounded-xl min-h-[80vh] md:flex items-center  justify-center p-3">
      <div className=" text-center md:w-1/2 px-6">
        <h1 className="section-heading">
          <span className="font-bold text-error">Opps!</span> Payment Cancelled
        </h1>
        <p className="subtext mt-3">Payment cancelled! please try again</p>
        <Link to={"/contests"} className="btn btn-primary">
          All Contests
        </Link>
      </div>
      <img
        src={img}
        alt=""
        className="md:w-1/2  h-90  object-cover overflow-hidden  "
      />
    </div>
  );
};

export default PaymentCancel;

import React from "react";
import { FaMedal } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { PiMonitorFill } from "react-icons/pi";

const WhyChooseUs = () => {
  return (
    <div>
      <div data-aos="fade-down" className="text-center">
        <h1 className="section-heading">
          Why <span className="font-bold text-primary">Choose </span> Us
        </h1>
        <p className="subtext">
          Secure, simple, and rewarding contests for everyone.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="grid md:grid-cols-2 gap-8 max-w-9/12 mx-auto"
      >
        <div className="bg-base-200 rounded-2xl p-4 flex md:flex-row flex-col text-center md:text-left items-center gap-3">
          <div className="">
            <IoIosLock fill="#4a75ed" size={120} />
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">Secure & Reliable</h1>
            <p className="text-sm text-secondary mt-2">
              Your data and participation are always protected with top-notch
              security, giving you peace of mind.
            </p>
          </div>
        </div>
        <div className="bg-base-200 rounded-2xl p-4 flex md:flex-row flex-col text-center md:text-left items-center gap-3">
          <div className="">
            <IoGrid fill="#4a75ed" size={120} />
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">
              Diverse Contest Categories
            </h1>
            <p className="text-sm text-secondary mt-2">
              From gaming to design and coding, we offer a wide range of
              contests to match every interest.
            </p>
          </div>
        </div>
        <div className="bg-base-200 rounded-2xl p-4 flex md:flex-row flex-col text-center md:text-left items-center gap-3">
          <div className="">
            <PiMonitorFill fill="#4a75ed" size={120} />
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">
              User-Friendly Experience{" "}
            </h1>
            <p className="text-sm text-secondary mt-2">
              Our platform is easy to navigate, making contest participation
              smooth and enjoyable.
            </p>
          </div>
        </div>
        <div className="bg-base-200 rounded-2xl p-4 flex md:flex-row flex-col text-center md:text-left items-center gap-3">
          <div className="">
            <FaMedal fill="#4a75ed" size={120} />
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">Exciting Rewards </h1>
            <p className="text-sm text-secondary mt-2">
              Win amazing prizes and recognition that make every contest
              thrilling and worthwhile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

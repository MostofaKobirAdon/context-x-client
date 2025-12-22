import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/banner/banner1.png";
import img2 from "../../assets/banner/banner2.png";
import img3 from "../../assets/banner/banner3.png";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const Banner = () => {
  const [searchText, setSearchText] = useState("");
  const axiosSecure = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ["contests", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests?searchText=${searchText}`);
      return res.data;
    },
  });
  return (
    <div data-aos="fade-down ">
      <div className="md:h-[460px] h-190">
        <div className="md:flex">
          <div className="md:w-1/2 relative text-center py-22">
            <h1 className="banner-title">
              Create Your{" "}
              <span className="text-primary font-bold">Contest</span> in Seconds
            </h1>
            <p className="subtext mt-2 mb-4">
              Launch a contest quickly and easily, no coding required.
            </p>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type="search"
                required
                placeholder="Search"
              />
            </label>
            {data.length > 0 && searchText.length > 0 ? (
              <div className="w-80 h-50  rounded-xl p-3 grid grid-cols-1 gap-y-2 overflow-y-scroll absolute left-32">
                {data.map((contest) => (
                  <div className="relative bg-base-200 h-20 rounded-lg shadow-lg p-1">
                    <p className="font-semibold">{contest.name}</p>
                    <Link
                      to={`/contests/${contest._id}`}
                      className="btn btn-primary btn-sm bottom-1 absolute"
                    >
                      Detail
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className=""></div>
            )}
          </div>
          <img
            src={img1}
            alt=""
            className="md:w-1/2 h-full object-cover overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

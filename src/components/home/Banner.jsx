import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/banner/banner1.png";
import img2 from "../../assets/banner/banner2.png";
import img3 from "../../assets/banner/banner3.png";
import BannerSearch from "./BannerSearch";

const Banner = () => {
  return (
    <div data-aos="fade-down">
      <div className="md:h-[460px] h-190">
        <div className="md:flex">
          <div className="md:w-1/2 text-center py-22">
            <h1 className="banner-title">
              Create Your{" "}
              <span className="text-primary font-bold">Contest</span> in Seconds
            </h1>
            <p className="subtext mt-2 mb-4">
              Launch a contest quickly and easily, no coding required.
            </p>
            <BannerSearch></BannerSearch>
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

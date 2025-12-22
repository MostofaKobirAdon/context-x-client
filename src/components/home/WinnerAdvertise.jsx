import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WinnerAdvertise = () => {
  const winners = [
    {
      name: "Ayaan Rahman",
      prize: "$120",
      category: "Design Contest",
      image: "https://i.ibb.co.com/JWmGcxnc/images-4.jpg",
      saying:
        "Winning this contest gave me a huge confidence boost. It showed me that my creativity truly has value, and now I feel excited to join even more challenges.",
    },
    {
      name: "Sara Ahmed",
      prize: "$95",
      category: "Photography Challenge",
      image:
        "https://i.ibb.co.com/1Gp9c8Tw/elyas-pasban-K6yjfwb-Bglk-unsplash.jpg",
      saying:
        "I joined the photography challenge just for fun, but the whole experience—from submitting my work to seeing the results—was incredible. Winning was the best surprise!",
    },
    {
      name: "Hasib Khan",
      prize: "$150",
      category: "Coding Marathon",
      image:
        "https://i.ibb.co.com/Rkbvx2Rx/kazi-mizan-5l-Cyksh-Pt-WI-unsplash.jpg",
      saying:
        "This contest pushed me to think differently and become better. The challenge was tough, but winning made every moment of effort completely worth it.",
    },
    {
      name: "Mira Tasnim",
      prize: "$80",
      category: "Short Story Contest",
      image:
        "https://i.ibb.co.com/dqtzJK8/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg",
      saying:
        "Writing has always been my passion, and this contest helped me express myself more confidently. Winning motivated me to keep creating and improving.",
    },
    {
      name: "Jahidul Islam",
      prize: "$110",
      category: "Idea Pitch Event",
      image:
        "https://i.ibb.co.com/4gdVY887/luis-villasmil-hh3-Vi-D0r0-Rc-unsplash.jpg",
      saying:
        "I didn’t expect my idea to stand out, but this platform gave me the chance to showcase it. Winning encouraged me to stay creative and think bigger.",
    },
    {
      name: "Nusrat Jahan",
      prize: "$70",
      category: "Art Challenge",
      image: "https://i.ibb.co.com/CpDQsvK8/dog-cozy.webp",
      saying:
        "The art challenge helped me explore new styles and techniques. Winning felt amazing, but the growth and experience I gained were even more valuable.",
    },
    {
      name: "Rafi Chowdhury",
      prize: "$130",
      category: "UI/UX Sprint",
      image: "https://i.ibb.co.com/7NWvn4zV/rayul-M6gy9o-Hg-II-unsplash.jpg",
      saying:
        "Competing with so many talented creators pushed me to improve fast. Winning this sprint gave me the motivation to keep building and experimenting.",
    },
    {
      name: "Anika Noor",
      prize: "$90",
      category: "Trivia Battle",
      image:
        "https://i.ibb.co.com/1tZjz1WB/damon-zaidmus-7nc-Pc-GL60-s-unsplash.jpg",
      saying:
        "This contest was super fun and surprisingly challenging. Winning made me realize how much I enjoy learning and competing in new areas.",
    },
  ];

  return (
    <div className="">
      <div data-aos="fade-down" className="text-center">
        <h1 className="section-heading ">
          See Our <span className="font-bold text-primary">Contest</span>{" "}
          Winners
        </h1>
        <p className="subtext">
          See our winners, what they say and their prize
        </p>
      </div>
      <div data-aos="fade-up" className="w-full px-4  relative">
        {/* <div className="bg-linear-to-l  from-white/50 via-white/5  via-transparent  via-white/5 to-white/50  absolute top-0 bottom-0 left-0 right-0 z-10"></div> */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2700, disableOnInteraction: false }}
          spaceBetween={20}
          centeredSlides={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 1.5,
              centeredSlides: true,
            },
          }}
          className="h-120 md:h-110"
        >
          {winners.map((winner) => (
            <SwiperSlide>
              <div className="">
                <div className="bg-linear-to-bl  p-7 py-10  from-primary to-[#4b499d] h-75 rounded-xl">
                  <p className="text-gray-200 text-center">{winner.saying}</p>
                </div>
                <div className="bg-base-100 p-3 md:h-60 h-70 -m-35 md:w-100 w-80 mx-auto  rounded-2xl shadow-md z-10 ">
                  <img
                    src={winner.image}
                    alt=""
                    className="rounded-full w-25 h-25 object-cover overflow-hidden mx-auto border-2 border-primary"
                  />
                  <h1 className="text-xl text-center font-semibold text-secondary">
                    {winner.name}
                  </h1>
                  <div className="md:flex justify-between px-2 pt-2.5 mt-2.5 border-t-2 border-gray-400">
                    <p className="text-lg">
                      <span className="font-bold ">Contest : </span>
                      {winner.category}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold ">Prize Mony :</span>{" "}
                      {winner.prize}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WinnerAdvertise;

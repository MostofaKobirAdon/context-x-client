import React from "react";
import about from "../assets/about.png";
import collaboration from "../assets/collaboration.png";

const About = () => {
  return (
    <div className="min-h-[85vh] flex flex-col gap-y-10">
      <div
        data-aos="fade-right"
        className="flex flex-col-reverse md:flex-row mt-10 items-center gap-4"
      >
        <div className="md:w-1/2 ">
          <h1 className="section-heading">
            Know <span className="text-primary font-bold">About</span> Us
          </h1>
          <p className="subtext mt-4">
            Welcome to ContestX, a platform built to bring together creativity,
            skill, and healthy competition. We provide a space where creators
            can host engaging contests and participants can showcase their
            talents across various categories such as gaming, writing, coding,
            and design. Our platform is designed to be secure, easy to use, and
            accessible for everyone. At ContestX, we believe in fair competition
            and transparency. Creators can publish contests with clear rules and
            rewards, while users can confidently participate and challenge
            themselves to grow their skills.
          </p>
        </div>
        <img src={about} alt="" className=" md:w-1/2" />
      </div>
      <div
        data-aos="fade-left"
        className="flex flex-col-reverse mt-10 items-center md:flex-row-reverse gap-4"
      >
        <div className="md:w-1/2 ">
          <h1 className="section-heading">
            What <span className="text-primary font-bold">We </span> Do
          </h1>
          <p className="subtext mt-4">
            We connect creators and participants through a modern contest-based
            platform. Creators can easily create and manage contests with clear
            rules, deadlines, and rewards, while participants can discover
            contests that match their skills and interests. Our platform
            supports multiple categories such as gaming, writing, coding, and
            design, making it easy for users to compete, learn, and grow. We
            focus on providing a secure, user-friendly experience where every
            contest is fair, transparent, and rewarding. At ContestX, we turn
            ideas into competitions and talent into achievement.
          </p>
        </div>
        <img src={collaboration} alt="" className=" md:w-1/2" />
      </div>
    </div>
  );
};

export default About;

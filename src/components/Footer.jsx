import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div data-aos="fade-up" className="  bg-accent text-neutral-content p-10">
      <div className="max-w-6xl mx-auto footer sm:footer-horizontal">
        <aside>
          <Logo isDark={true}></Logo>
          <p>
            ContestX is a platform <br /> to create, join, and manage <br />{" "}
            exciting contests. Compete, <br /> win prizes, and celebrate
            champions.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <FaFacebook size={30} />
            <FaLinkedin size={30}></FaLinkedin>
            <FaYoutube size={30}></FaYoutube>
          </div>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto text-center mt-4">
        <p className="text-white">Copyright © 2025 ContestX</p>
      </div>
    </div>
  );
};

export default Footer;

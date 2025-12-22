import React from "react";
import team from "../assets/team.png";
import contact from "../assets/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  return (
    <div>
      <div data-aos="fade-down" className="mt-4 text-center">
        <h1 className="section-heading">
          Need Any <span className="font-bold text-primary">Help</span> ?
        </h1>
        <h2 className="subtext">Our dedicatedteam is Here for You!</h2>
      </div>
      <div data-aos="fade-up" className="lg:flex mt-10 gap-5">
        <div className="lg:w-1/2">
          <p className="text-secondary">
            At ContestX, we want every participant to have a smooth and
            enjoyable experience. Whether you have questions about entering a
            contest, submitting your work, understanding the rules, or managing
            your account, our dedicated support team is here to guide you every
            step of the way. Simply fill out the contact form below with your
            details and message, or reach out to us via email or social media.
            We aim to respond promptly and ensure that your experience with
            ContestX is seamless, fair, and fun. Your feedback and questions
            help us make the platform even better!
          </p>
        </div>
        <img src={team} alt="" className="lg:w-1/2 lg:h-70 object-cover " />
      </div>
      <div
        data-aos="fade-up"
        className="lg:flex flex-row-reverse items-center mt-10"
      >
        <div className="card-body lg:w-1/2">
          <fieldset className="fieldset w-full lg:w-5/6 mx-auto">
            <h1 className="text-3xl font-semibold mb-4">
              Tell{" "}
              <span
                className="font-bold text-primary 
              "
              >
                Us
              </span>{" "}
              your Problem
            </h1>
            <label className="label">Full Name</label>
            <input type="text" className="input w-full" placeholder="Name" />
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />
            <label className="label">Message</label>
            <textarea
              className="textarea w-full"
              placeholder="Message"
            ></textarea>

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
        <img src={contact} alt="" className="lg:w-1/2" />
      </div>
    </div>
  );
};

export default Contact;

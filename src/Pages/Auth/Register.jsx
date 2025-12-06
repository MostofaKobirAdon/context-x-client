import React from "react";
import { Link } from "react-router";
import GoogleLogin from "../../components/Auth/GoogleLogin";
import img from "../../assets/Signup.gif";

const Register = () => {
  return (
    <div className="flex items-center">
      <div className="card-body  w-1/2">
        <div className="w-4/6 mx-auto ">
          <h1 className="section-heading">
            Create an <span className="text-primary font-bold">Account</span>
          </h1>
          <p className="subtext mb-1">Register to contestX</p>
          <form className="fieldset  ">
            <label className="label">Name</label>
            <input type="text" className="input w-full" placeholder="Name" />
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Photo URL"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
            />

            <button className="btn btn-primary mt-4">Register</button>
          </form>
          <p className="text-sm text-gray-500 mt-0.5">
            Already have an Account ?{" "}
            <Link
              to={"/login"}
              className="text-primary hover:cursor-pointer hover:underline"
            >
              Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <GoogleLogin operation={"Register"}></GoogleLogin>
        </div>
      </div>
      <div className=" w-1/2">
        <img src={img} alt="" className="" />
      </div>
    </div>
  );
};

export default Register;

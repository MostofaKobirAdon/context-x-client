import React from "react";
import img from "../../assets/login.gif";
import GoogleLogin from "../../components/Auth/GoogleLogin";

const Login = () => {
  return (
    <div className="flex items-center">
      <div className="card-body  w-1/2">
        <div className="w-4/6 mx-auto ">
          <h1 className="section-heading">
            <span className="text-primary font-bold">Welcome</span> Back
          </h1>
          <p className="subtext mb-2">Log In to contestX</p>
          <form className="fieldset  ">
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
            />

            <button className="btn btn-primary mt-4">Login</button>
          </form>
          <div className="divider">OR</div>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
      <div className=" w-1/2">
        <img src={img} alt="" className="" />
      </div>
    </div>
  );
};

export default Login;

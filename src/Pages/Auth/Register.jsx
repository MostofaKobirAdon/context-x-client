import React from "react";
import { Link } from "react-router";
import GoogleLogin from "../../components/Auth/GoogleLogin";
import img from "../../assets/Signup.gif";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const { createUser, updateUser } = useAuth();

  const handleRegister = (data) => {
    console.log(data);
    const { email, password, name, photoURL } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then((res) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Account created successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => {
            Swal.fire({
              position: "cenetr",
              icon: "error",
              title: `${err.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="flex items-center">
      <div className="card-body  w-1/2">
        <div className="w-4/6 mx-auto ">
          <h1 className="section-heading">
            Create an <span className="text-primary font-bold">Account</span>
          </h1>
          <p className="subtext mb-1">Register to contestX</p>
          <form onSubmit={handleSubmit(handleRegister)} className="fieldset  ">
            <label className="label">Name</label>
            <input
              {...register("name")}
              type="text"
              className="input w-full"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              {...register("email")}
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Photo URL</label>
            <input
              {...register("photoURL")}
              type="text"
              className="input w-full"
              placeholder="Photo URL"
            />
            <label className="label">Password</label>
            <input
              {...register("password")}
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

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleLogin from "../../components/Auth/GoogleLogin";
import img from "../../assets/Signup.gif";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useAuth();

  const handleRegister = (data) => {
    setLoading(true);
    const { email, password, name, photoURL } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then((res) => {
            axiosSecure
              .post("/users", {
                email: email,
                displayName: name,
                photoURL: photoURL,
              })
              .then((res) => {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Account created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
                navigate(`${location.state ? location.state : "/"}`);
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
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="flex items-center justify-center">
      {loading ? (
        <div className="flex justify-center items-center min-h-[80vh]">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <>
          <div className="card-body  w-1/2">
            <div className="w-4/6 mx-auto ">
              <h1 className="section-heading">
                Create an{" "}
                <span className="text-primary font-bold">Account</span>
              </h1>
              <p className="subtext mb-1">Register to contestX</p>
              <form
                onSubmit={handleSubmit(handleRegister)}
                className="fieldset  "
              >
                <label className="label">Name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500 text-xs  -mt-1.5">
                    name is required
                  </p>
                )}
                <label className="label">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500 text-xs  -mt-1.5">
                    email is required
                  </p>
                )}
                <label className="label">Photo URL</label>
                <input
                  {...register("photoURL", { required: true })}
                  type="text"
                  className="input w-full"
                  placeholder="Photo URL"
                />
                {errors.photoURL?.type === "required" && (
                  <p className="text-red-500 text-xs  -mt-1.5">
                    photoURL is required
                  </p>
                )}
                <label className="label">Password</label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[a-z]).+$/,
                  })}
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                />
                {errors.password?.type === "required" ? (
                  <p className="text-red-500 text-xs  -mt-1.5">
                    password is required
                  </p>
                ) : errors.password?.type === "minLength" ? (
                  <p className="text-red-500 text-xs  -mt-1.5">
                    password must be at least 6 charecters
                  </p>
                ) : (
                  errors.password?.type === "pattern" && (
                    <p className="text-red-500 text-xs  -mt-1.5">
                      password must have one uppercase and one lower case letter
                    </p>
                  )
                )}

                <button className="btn btn-primary mt-4">Register</button>
              </form>
              <p className="text-sm text-gray-500 mt-0.5">
                Already have an Account ?{" "}
                <Link
                  state={location.state}
                  to={"/auth/login"}
                  className="text-primary hover:cursor-pointer hover:underline"
                >
                  Login
                </Link>
              </p>
              <div className="divider">OR</div>
              <GoogleLogin
                setLoading={setLoading}
                state={location.state}
                operation={"Register"}
              ></GoogleLogin>
            </div>
          </div>
          <div className=" w-1/2">
            <img src={img} alt="" className="" />
          </div>
        </>
      )}
    </div>
  );
};

export default Register;

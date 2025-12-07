import React, { useState } from "react";
import img from "../../assets/login.gif";
import GoogleLogin from "../../components/Auth/GoogleLogin";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();

  const handleLogin = (data) => {
    setLoading(true);
    const { email, password } = data;
    console.log("after lgoin", data);
    login(email, password)
      .then((result) => {
        const user = result.user;

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully",
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
        }).finally(() => setLoading(false));
      });
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
                <span className="text-primary font-bold">Welcome</span> Back
              </h1>
              <p className="subtext mb-1">Log In to contestX</p>
              <form onSubmit={handleSubmit(handleLogin)} className="fieldset  ">
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
                <label className="label">Password</label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-xs  -mt-1.5">
                    password is required
                  </p>
                )}

                <button className="btn btn-primary mt-4">Login</button>
              </form>
              <p className="text-sm text-gray-500 mt-0.5">
                Don't have an Account ?{" "}
                <Link
                  state={location.state}
                  to={"/auth/register"}
                  className="text-primary hover:cursor-pointer hover:underline"
                >
                  Register
                </Link>
              </p>
              <div className="divider">OR</div>
              <GoogleLogin
                setLoading={setLoading}
                state={location.state}
                operation={"Login"}
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

export default Login;

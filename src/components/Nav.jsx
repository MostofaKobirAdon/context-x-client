import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Nav = () => {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li className="">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="">
        <NavLink to={"/contests"}>All Contests</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "ceneter",
          icon: "success",
          title: `Logged out successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "ceneter",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="fixed left-0 shadow-sm bg-gray-100/50 right-0 top-0 z-10">
      <div className="navbar w-11/12 mx-auto  bg-transparent ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="">
            <Logo isDark={false}></Logo>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-11 h-11 border-2 border-primary rounded-full object-cover overflow-hidden"
                  />
                </div>
                <div
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-60 p-2 shadow-sm"
                >
                  <h1 className="text-xl font-semibold">{user?.displayName}</h1>
                  <Link
                    to={"/dashboard/my-profile"}
                    className="btn  btn-primary btn-sm mt-2"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline btn-primary btn-sm mt-2"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Link to={"/auth/login"} className="btn btn-primary ">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";

const Nav = () => {
  const links = (
    <>
      <li className="">
        <NavLink to={"/"}>Home</NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed left-0 bg-gray-100/50 right-0 top-0 z-10">
      <div className="navbar  bg-transparent shadow-sm">
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
            <img src={logo} alt="" className="h-9" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary ">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;

import React, { useEffect, useState } from "react";
import logoSm from "../assets/logoSm.png";
import { Link, NavLink, Outlet } from "react-router";
import { IoHomeOutline, IoSunny, IoTrophyOutline } from "react-icons/io5";
import Logo from "../components/Logo";
import { CgProfile } from "react-icons/cg";
import { MdFormatListBulleted, MdFormatListBulletedAdd } from "react-icons/md";
import { FaMoon, FaTasks, FaUserEdit } from "react-icons/fa";
import useRole from "../hooks/useRole";
import { FiFileText } from "react-icons/fi";

const DashBoardLayout = () => {
  const { role } = useRole();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggole = (e) => {
    const value = e.target.checked;
    setTheme(value ? "dark" : "light");
  };
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4">Dashboard</div>
            <label className="toggle bg-transparent text-base-content">
              <input
                type="checkbox"
                checked={theme === "dark" ? true : false}
                onChange={(e) => handleThemeToggole(e)}
                className="theme-controller"
              />

              <IoSunny />

              <FaMoon />
            </label>
          </nav>
          {/* Page content here */}
          <div className="p-5 ">
            <div className="md:max-w-7xl max-w-[97%] mx-auto">
              <Outlet />
            </div>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <div className="w-full px-5 pt-3">
              <Link to={"/"}>
                <img
                  src={logoSm}
                  alt=""
                  className="is-drawer-open:hidden w-4"
                />
              </Link>
              <div className="is-drawer-close:hidden">
                <Logo></Logo>
              </div>
            </div>
            <ul className="menu w-full grow">
              {/* List item */}

              <li>
                <NavLink
                  to={"/"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <IoHomeOutline size={17} />

                  <span className="is-drawer-close:hidden">Homepage</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/my-profile"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Profile"
                >
                  {/* Home icon */}
                  <CgProfile size={17} />

                  <span className="is-drawer-close:hidden">My Profile</span>
                </NavLink>
              </li>

              {role === "user" && (
                <li>
                  <NavLink
                    to={"/dashboard/participated-contests"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Participated Contests"
                  >
                    {/* Home icon */}
                    <IoTrophyOutline size={17} />

                    <span className="is-drawer-close:hidden">
                      Participated Contests
                    </span>
                  </NavLink>
                </li>
              )}
              {role === "creator" && (
                <>
                  <li>
                    <NavLink
                      to={"/dashboard/add-contest"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Add Contest"
                    >
                      {/* Home icon */}
                      <MdFormatListBulletedAdd size={17} />

                      <span className="is-drawer-close:hidden">
                        Add Contest
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/my-created-contests"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="My created Contests"
                    >
                      {/* Home icon */}
                      <MdFormatListBulleted size={17} />

                      <span className="is-drawer-close:hidden">
                        My Created Contests
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/submissions"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Submitted Tasks"
                    >
                      {/* Home icon */}
                      <FiFileText size={17} />

                      <span className="is-drawer-close:hidden">
                        Submitted Tasks
                      </span>
                    </NavLink>
                  </li>
                </>
              )}

              {role === "admin" && (
                <>
                  <li>
                    <NavLink
                      to={"/dashboard/manage-users"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Manage Users"
                    >
                      {/* Home icon */}
                      <FaUserEdit size={17} />

                      <span className="is-drawer-close:hidden">
                        Manage Users
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/manage-contests"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Manage Contests"
                    >
                      {/* Home icon */}
                      <FaTasks size={17} />

                      <span className="is-drawer-close:hidden">
                        Manage Contests
                      </span>
                    </NavLink>
                  </li>
                </>
              )}

              {/* List item */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;

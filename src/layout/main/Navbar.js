import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation } from "react-router-dom";
import { logOut } from "../../features/auth/authSlice";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
  const { pathname } = useLocation();
  const {
    user: { email, role },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    signOut(auth).then(() => {
      dispatch(logOut());
    });
  };

  return (
    <nav
      className={`h-14 fixed w-full z-[999] ${
        pathname === "/" ? null : "bg-white"
      }`}
    >
      <ul className="max-w-7xl mx-auto flex justify-between gap-3 h-full items-center px-16">
        <div>
          <li className="flex-auto font-semibold text-2xl">
            <Link to="/">JobBox</Link>
          </li>
        </div>
        <div className="flex gap-5 items-center">
          <li>
            <Link className="hover:text-primary" to="/jobs">
              Jobs
            </Link>
          </li>
          {!email && (
            <li>
              <Link
                className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:border-blue-600 hover:bg-blue-500 hover:px-4 transition-all "
                to="/login"
              >
                Login
              </Link>
            </li>
          )}
          {email && role && (
            <>
              {" "}
              <Link to={"/dashboard"}>Dashboard</Link>
            </>
          )}
          {email && (
            <li>
              <button
                onClick={() => logOutHandler()}
                className="border px-2 py-1 rounded-full hover:border border-blue-600 hover:bg-blue-500 hover:px-4 transition-all "
              >
                LogOut
              </button>
            </li>
          )}
          {email && !role && (
            <Link
              className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:border-blue-600 hover:bg-blue-500 hover:px-4 transition-all "
              to="/register"
            >
              Get Started
            </Link>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

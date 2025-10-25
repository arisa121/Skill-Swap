import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import logo from "../assets/image.png";
import { Link, NavLink } from "react-router";
import { auth } from "../firebase.init";
import toast from "react-hot-toast";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const handleLogOut = () => {
    try {
      signOut(auth);
      toast.success("LogOut Successfully");
    } catch (error) {
      toast.success(error.message);
    }
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <a>My Profile</a>
              </li>
            </ul>
          </div>
          <img className="w-20 h-20" src={logo} alt="Logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {user && (
                <Link to="/profile" className="ml-4">
                  My Profile
                </Link>
              )}
            </li>
          </ul>
        </div>

        {!user ? (
          <>
            <div className="navbar-end gap-3">
              <Link className="btn btn-outline btn-primary" to="/login">
                Login
              </Link>
              <Link className="btn btn-outline btn-primary" to="/signup">
                SignUp
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link to="/" className="btn" onClick={handleLogOut}>
              LogOut
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

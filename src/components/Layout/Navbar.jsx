import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images (4).jpg";
import { Link, NavLink } from "react-router";
import { auth } from "../../firebase.init";
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
      toast.error(error.message);
    }
  };

  return (
    <div className="navbar bg-gray-50 shadow-sm px-4 lg:px-8">
      {/* Navbar start: Logo & Mobile menu */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden" id="mobile-menu">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/profile">My Profile</NavLink>
              </li>
            )}
            {!user && (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">SignUp</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <img className="w-20 h-20 ml-2 bg-gray-200" src={logo} alt="Logo" />
      </div>

      {/* Navbar center: Menu for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* Navbar end: Auth buttons */}
      <div className="navbar-end flex gap-3 items-center">
        {!user ? (
          <>
            <Link className="btn btn-outline btn-primary" to="/login">
              Login
            </Link>
            <Link className="btn btn-outline btn-primary" to="/signup">
              SignUp
            </Link>
          </>
        ) : (
          <>
            {/* User Avatar with Hover Name */}
            <div className="relative group">
              <img
                src={
                  user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                }
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500 cursor-pointer"
              />
             
              <div className="absolute right-0 mt-12 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                <div className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                  {user.displayName || "User"}
                </div>
                <div className="w-3 h-3 bg-gray-800 rotate-45 transform origin-center mx-auto mt-[-6]" />
              </div>
            </div>

            <button
              onClick={handleLogOut}
              className="btn bg-linear-65 from-purple-500 to-pink-500 text-white"
            >
              LogOut
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

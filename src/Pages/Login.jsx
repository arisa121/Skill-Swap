import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.init";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
const provider = new GoogleAuthProvider();
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // Email Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Log in Successful");
      navigate(from, { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };
  // ✅ Google Signup/Login
  const handleGoogleSignup = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Logged in with Google 🎉");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };
  //  Forget Password Section
  const handleForgetPassword = () => {
    localStorage.getItem("resent email", email);
    navigate("/forget-password");
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="font-semibold text-2xl text-center mt-2">LOGIN</h2>
          <form className="card-body">
            <fieldset onSubmit={handleEmailLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="input w-full"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-2.5 right-5 cursor-pointer text-gray-500"
                >
                  {showPass ? <FiEyeOff size={20} /> : <FaEye size={20} />}
                </span>
              </div>

              <div>
                <p
                  onClick={handleForgetPassword}
                  className="my-2 text-blue-600 cursor-pointer"
                >
                  Forgot Password?
                </p>
              </div>
              <button type="submit" className="btn btn-neutral">
                Login
              </button>
            </fieldset>
          </form>
          <h4 className="text-center">Or Login with</h4>

          <button onClick={handleGoogleSignup} className="btn w-full mt-2 mb-8">
            <FcGoogle /> Google
          </button>
          <p className="mt-2 font-semibold mb-4 text-center">
            Don't have an account? <br />
            <Link className="text-secondary" to="/signup">
              {" "}
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

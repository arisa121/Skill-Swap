import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate, Link } from "react-router";
import app from "../firebase.init";
import { FiEyeOff } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
const auth = getAuth(app);

const Signup = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log({ name, email, photo, password });

    // ✅ Password Validation
    if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
      return setError(
        "Password must contain uppercase, lowercase & be at least 6 characters long!"
      );
    }

   
    // ✅ Firebase Signup
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // ✅ Update Profile Info
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          toast.success("Signup successful 🎉");
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-md shadow-lg bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full mb-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full mb-3"
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full mb-3"
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full mb-3"
              required
            />

            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute top-2.5 right-5 cursor-pointer text-gray-500"
            >
              {showPass ? <FiEyeOff size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button type="submit" className="btn btn-primary w-full mb-3">
            SignUp
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

import React, { useEffect, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.init";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("resetEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleReset = () => {
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset link sent! Redirecting to Gmail...");
        setTimeout(() => {
          window.location.href = "https://mail.google.com/mail/u/0/#inbox";
        }, 1500);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Reset Your Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleReset} className="btn btn-primary w-full">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;

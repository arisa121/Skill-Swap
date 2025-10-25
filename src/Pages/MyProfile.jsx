import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { Link, Navigate, useNavigate } from "react-router";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || "https://placehold.co/600x400"}
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-primary mb-4"
          />
          <h2 className="text-2xl font-semibold">
            {user?.displayName || "No Name"}
          </h2>
          <p className="text-gray-600">{user?.email}</p>
          <button
            onClick={() => navigate("/update-profile")}
            className="btn btn-primary"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import app from "../firebase.init";

const auth = getAuth(app);

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      setMessage("✅ Profile updated successfully!");

      // Redirect back to MyProfile after 2 seconds
      setTimeout(() => {
        navigate("/my-profile");
      }, 2000);
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to update profile!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card bg-white shadow-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Update Profile
        </h2>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="font-medium">Name:</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="font-medium">Profile Image URL:</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter image URL"
            />
          </div>

          <Link to="/profile">
            <button type="submit" className="btn btn-primary w-full">
              Save Changes
            </button>
          </Link>
        </form>

        {message && (
          <p
            className={`text-center mt-4 ${
              message.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default UpdateProfile;

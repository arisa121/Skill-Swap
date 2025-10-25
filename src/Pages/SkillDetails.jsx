import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import toast from "react-hot-toast";

const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });

  // Load Skill Data
  useEffect(() => {
    fetch("/Skill.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find(
          (item) => String(item.skillId) === String(id)
        );
        setSkill(selected);
      });
  }, [id]);

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully 🎉");
    setFormData({
      name: "",
      email: "",
    });
  };

  if (!skill)
    return (
      <p className="text-center text-lg mt-10">Loading skill details...</p>
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-100 shadow-xl w-full max-w-2xl p-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          {skill.skillName}
        </h2>
        <img
          src={skill.image}
          alt={skill.skillName}
          className="rounded-lg mb-4 w-full h-60 object-cover"
        />
        <p className="text-gray-600 mb-2">
          <strong>Category:</strong> {skill.category}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Instructor:</strong> {skill.providerName}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Email:</strong> {skill.providerEmail}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Price:</strong> ${skill.price}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Rating:</strong> ⭐ {skill.rating}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Slots Available:</strong> {skill.slotsAvailable}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Description:</strong> {skill.description}
        </p>

        {/* ✅ Book Session Form */}
        <div className="divider">Book a Session</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <button type="submit" className="btn btn-primary mt-2">
            Book Session
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillDetails;

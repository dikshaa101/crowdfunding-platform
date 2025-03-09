import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../App";

function CreateCampaign() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ Form State
  const [campaignData, setCampaignData] = useState({
    title: "",
    description: "",
    goalAmount: "",
    imageUrl: "",
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🚨 Check if User is Logged In
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to create a campaign!");
      navigate("/signin");
      return;
    }

    try {
      console.log("🔹 Sending Request with Token:", token); // ✅ Debugging Line

      const response = await axios.post(
        "http://localhost:5000/api/campaigns",
        campaignData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("✅ Campaign Created:", response.data);
      alert("🎉 Campaign Created Successfully!");
      navigate("/campaigns"); // Redirect to Campaigns Page

    } catch (error) {
      console.error("❌ Error creating campaign:", error.response?.data);
      alert("Failed to create campaign. Check console for details.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Campaign</h2>
      <form onSubmit={handleSubmit}>
        {/* Campaign Title */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={campaignData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={campaignData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Goal Amount */}
        <div className="mb-3">
          <label className="form-label">Goal Amount ($)</label>
          <input
            type="number"
            name="goalAmount"
            className="form-control"
            value={campaignData.goalAmount}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            className="form-control"
            value={campaignData.imageUrl}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Create Campaign</button>
      </form>
    </div>
  );
}

export default CreateCampaign;

const express = require("express");
const router = express.Router();
const Campaign = require("../models/Campaign"); // ✅ FIXED: Un-commented this import

// @route   GET /api/campaigns
// @desc    Get all campaigns
router.get("/", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   POST /api/campaigns
// @desc    Create a new campaign
router.post("/", async (req, res) => {
  try {
    const { title, description, goal, raisedAmount, image } = req.body;

    if (!title || !description || !goal) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const newCampaign = new Campaign({
      title,
      description,
      goal,
      raisedAmount: raisedAmount || 0,
      image: image || "default-campaign.jpg",
    });

    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (error) {
    console.error("Error creating campaign:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   PUT /api/campaigns/:id
// @desc    Update a campaign
router.put("/:id", async (req, res) => {
  try {
    const { title, description, goal, raisedAmount, image } = req.body;
    const updatedCampaign = await Campaign.findByIdAndUpdate(
      req.params.id,
      { title, description, goal, raisedAmount, image },
      { new: true }
    );

    if (!updatedCampaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    res.json(updatedCampaign);
  } catch (error) {
    console.error("Error updating campaign:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   DELETE /api/campaigns/:id
// @desc    Delete a campaign
router.delete("/:id", async (req, res) => {
  try {
    const deletedCampaign = await Campaign.findByIdAndDelete(req.params.id);
    if (!deletedCampaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.json({ message: "Campaign deleted successfully" });
  } catch (error) {
    console.error("Error deleting campaign:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Import user routes
const userRoutes = require("./routes/userRoutes");

dotenv.config(); // Load environment variables

// Check if MONGO_URI exists
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file!");
  process.exit(1);
}

// Initialize Express app
const app = express();
app.use(express.json()); // ✅ Middleware to parse JSON
app.use(cors());

// Debugging Log
console.log("✅ Express server initialized");

// Register user routes
app.use("/api/users", userRoutes); // ✅ Correct path

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1);
  });

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

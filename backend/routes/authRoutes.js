const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");

const router = express.Router();

console.log("✅ Auth routes loaded!");

// ✅ User Registration Route
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  async (req, res) => {
    console.log("📩 Register Request Received:", req.body);
    console.log("🔍 Request Headers:", req.headers); // Debugging CORS issues

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("❌ Validation Errors:", errors.array());
      return res.status(400).json({ message: "Validation error", errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        console.log("❌ User already exists:", email);
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      user = new User({ name, email, password: hashedPassword });
      await user.save();

      // Generate JWT token
      const JWT_SECRET = process.env.JWT_SECRET || "secret123"; // Fallback for debugging
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

      console.log("✅ User registered successfully:", user.email);
      res.status(201).json({ token, user: { id: user._id, name, email } });

    } catch (error) {
      console.error("❌ Server Error:", error.message);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
);

// ✅ User Login Route
router.post("/login", async (req, res) => {
  console.log("📩 Login Request Received:", req.body);

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found:", email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Invalid password for:", email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("✅ Login successful:", email);
    res.json({ token, user: { id: user._id, name: user.name, email } });

  } catch (error) {
    console.error("❌ Server Error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;

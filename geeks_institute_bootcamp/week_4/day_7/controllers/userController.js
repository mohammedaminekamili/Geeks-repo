const User = require("../models/User");

// ─────────────────────────────────────────────
// REGISTER a new user
// POST /api/users/register
// ─────────────────────────────────────────────
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check for duplicate email
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = await User.create({ name, email, password, role });

    // SECURITY: Manually remove password before sending response
    const userObj = user.toObject();
    delete userObj.password;

    res.status(201).json({ message: "User registered successfully", user: userObj });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─────────────────────────────────────────────
// GET all users (admin use)
// GET /api/users
// ─────────────────────────────────────────────
const getAllUsers = async (req, res) => {
  try {
    // PERFORMANCE: .lean() + .select() — only return what's needed
    const users = await User.find()
      .select("name email role createdAt")
      .lean();

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─────────────────────────────────────────────
// GET a single user by ID
// GET /api/users/:id
// ─────────────────────────────────────────────
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-password")
      .lean();

    // SILENT FAILURE FIX: Always check for null
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─────────────────────────────────────────────
// DELETE a user
// DELETE /api/users/:id
// ─────────────────────────────────────────────
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { registerUser, getAllUsers, getUserById, deleteUser };

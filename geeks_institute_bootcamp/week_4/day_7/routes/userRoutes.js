const express = require("express");
const router = express.Router();
const {
  registerUser,
  getAllUsers,
  getUserById,
  deleteUser,
} = require("../controllers/userController");

// POST   /api/users/register  — Create a new account
router.post("/register", registerUser);

// GET    /api/users            — Get all users (admin)
router.get("/", getAllUsers);

// GET    /api/users/:id        — Get one user
router.get("/:id", getUserById);

// DELETE /api/users/:id        — Delete a user
router.delete("/:id", deleteUser);

module.exports = router;

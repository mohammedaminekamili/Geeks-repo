const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// ─────────────────────────────────────────────
// USER SCHEMA
// Handles identity, authentication, and roles.
// ─────────────────────────────────────────────
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,       // Creates a DB index — prevents duplicate accounts
      lowercase: true,    // Normalize to lowercase before saving
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false, // SECURITY: Never return password in queries by default
    },
    role: {
      type: String,
      enum: ["user", "admin", "vendor"],
      default: "user",
    },
  },
  {
    timestamps: true, // Auto-adds createdAt and updatedAt
  }
);

// ─────────────────────────────────────────────
// MIDDLEWARE: Auto-hash password before saving
// The isModified check prevents re-hashing an
// already-hashed password when other fields
// (like email) are updated.
// ─────────────────────────────────────────────
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// ─────────────────────────────────────────────
// INSTANCE METHOD: Compare passwords at login
// ─────────────────────────────────────────────
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

// ─────────────────────────────────────────────
// PRODUCT SCHEMA
// Tracks inventory and links products to their
// owner (seller) via a User reference.
// ─────────────────────────────────────────────
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"], // VALIDATION: No negative prices
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, "Stock cannot be negative"],
    },
    category: {
      type: String,
      trim: true,
      lowercase: true,
    },
    image: {
      type: String, // URL to the product image
      default: "",
    },
    // RELATIONSHIP: Each product is owned by one User (the seller)
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Product must have an owner"],
    },
  },
  {
    timestamps: true,
  }
);

// ─────────────────────────────────────────────
// PERFORMANCE: Compound Index
// Users frequently filter by category AND sort
// by price. This index makes those queries
// instantaneous even with 50,000+ products.
// ─────────────────────────────────────────────
productSchema.index({ category: 1, price: -1 });

module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

// ─────────────────────────────────────────────
// ORDER SCHEMA — Hybrid Relationship Model
//
// DESIGN DECISION: Items are EMBEDDED (not referenced).
// Reason: This is the "Snapshot Pattern." If a product's
// price changes next week, the customer's receipt must
// still show what they actually paid. By embedding the
// title and priceAtPurchase, this order is a permanent,
// immutable record of the transaction at that moment.
//
// The buyer is REFERENCED to avoid the "16MB Trap" —
// a user can have unlimited orders without bloating the
// User document.
// ─────────────────────────────────────────────
const orderSchema = new mongoose.Schema(
  {
    // REFERENCE: Link to the User who placed the order
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Order must have a buyer"],
    },

    // EMBEDDED: Snapshot of products at time of purchase
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        title: {
          type: String,
          required: true, // Snapshot: captured at purchase time
        },
        priceAtPurchase: {
          type: Number,
          required: true, // Snapshot: price locked in at purchase time
          min: 0,
        },
        quantity: {
          type: Number,
          default: 1,
          min: [1, "Quantity must be at least 1"],
        },
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
    },

    shippingAddress: {
      street: String,
      city: String,
      country: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);

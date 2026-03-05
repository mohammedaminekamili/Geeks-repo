const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrdersByBuyer,
  getOrderById,
  updateOrderStatus,
  getAllOrders,
} = require("../controllers/orderController");

// GET    /api/orders                    — All orders (admin)
router.get("/", getAllOrders);

// GET    /api/orders/buyer/:userId      — Orders by a specific buyer
router.get("/buyer/:userId", getOrdersByBuyer);

// GET    /api/orders/:id                — Single order detail
router.get("/:id", getOrderById);

// POST   /api/orders                    — Place an order (the full purchase flow)
router.post("/", createOrder);

// PATCH  /api/orders/:id/status         — Update order status
router.patch("/:id/status", updateOrderStatus);

module.exports = router;

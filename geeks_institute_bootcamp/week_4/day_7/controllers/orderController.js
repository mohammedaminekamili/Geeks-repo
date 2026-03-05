const Order = require("../models/Order");
const Product = require("../models/Product");

// ─────────────────────────────────────────────
// CREATE an order (the "Purchase" flow)
// POST /api/orders
//
// This is the capstone graduation script:
// 1. Find the Product
// 2. Create the Order (with price snapshot)
// 3. Decrement Product stock with $inc
// ─────────────────────────────────────────────
const createOrder = async (req, res) => {
  try {
    const { buyer, items, shippingAddress } = req.body;
    // items = [{ productId, quantity }, ...]

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Order must contain at least one item" });
    }

    let totalAmount = 0;
    const orderItems = [];

    // Process each item in the cart
    for (const item of items) {
      // Step 1: Find the product
      const product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({ message: `Product ${item.productId} not found` });
      }

      // Check stock availability
      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `Insufficient stock for "${product.title}". Available: ${product.stock}`,
        });
      }

      // Step 2: Snapshot the price at purchase time
      // This ensures old receipts stay accurate even if price changes later
      orderItems.push({
        productId: product._id,
        title: product.title,         // SNAPSHOT: frozen at purchase time
        priceAtPurchase: product.price, // SNAPSHOT: frozen at purchase time
        quantity: item.quantity,
      });

      totalAmount += product.price * item.quantity;

      // Step 3: Decrement stock using $inc (atomic operation)
      await Product.findByIdAndUpdate(product._id, {
        $inc: { stock: -item.quantity },
      });
    }

    // Create the order document
    const order = await Order.create({
      buyer,
      items: orderItems,
      totalAmount,
      shippingAddress,
    });

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─────────────────────────────────────────────
// GET all orders for a specific buyer
// GET /api/orders/buyer/:userId
// ─────────────────────────────────────────────
const getOrdersByBuyer = async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.params.userId })
      .populate("buyer", "name email") // Use .populate() to see who placed the order
      .sort({ createdAt: -1 })
      .lean();

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─────────────────────────────────────────────
// GET a single order
// GET /api/orders/:id
// ─────────────────────────────────────────────
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("buyer", "name email")
      .lean();

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─────────────────────────────────────────────
// UPDATE order status
// PATCH /api/orders/:id/status
// ─────────────────────────────────────────────
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─────────────────────────────────────────────
// GET all orders (admin)
// GET /api/orders
// ─────────────────────────────────────────────
const getAllOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;

    const orders = await Order.find()
      .populate("buyer", "name email")
      .select("buyer totalAmount status createdAt")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrdersByBuyer,
  getOrderById,
  updateOrderStatus,
  getAllOrders,
};

const express = require("express");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// Route files
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// ─────────────────────────────────────────────
// MIDDLEWARE
// ─────────────────────────────────────────────
app.use(express.json());           // Parse incoming JSON request bodies
app.use(express.urlencoded({ extended: true }));

// ─────────────────────────────────────────────
// ROUTES — The Map
// ─────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ message: "🛒 NexusMarket API is running" });
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// ─────────────────────────────────────────────
// ERROR HANDLING MIDDLEWARE (must be last)
// ─────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

module.exports = app;

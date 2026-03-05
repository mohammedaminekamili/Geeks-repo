const Product = require("../models/Product");

// ─────────────────────────────────────────────
// GET all products with pagination
// GET /api/products?page=1&category=electronics
//
// PERFORMANCE: Uses .lean(), .select(), .skip()/.limit()
// to handle thousands of products efficiently.
// ─────────────────────────────────────────────
const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 12; // 12 products per page (infinite scroll)
    const { category } = req.query;

    // Build query filter dynamically
    const filter = {};
    if (category) filter.category = category.toLowerCase();

    const products = await Product.find(filter)
      .select("title price category image stock createdAt") // Only card-level fields
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean(); // PERFORMANCE: Plain JS object, not Mongoose Document

    const total = await Product.countDocuments(filter);

    res.json({
      products,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalProducts: total,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─────────────────────────────────────────────
// GET a single product (with seller info)
// GET /api/products/:id
// ─────────────────────────────────────────────
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("owner", "name email") // Hydrate the owner reference
      .lean();

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─────────────────────────────────────────────
// CREATE a product
// POST /api/products
// ─────────────────────────────────────────────
const createProduct = async (req, res) => {
  try {
    const { title, description, price, stock, category, image, owner } = req.body;

    // VALIDATION: Price cannot be negative (also enforced at schema level)
    if (price < 0) {
      return res.status(400).json({ message: "Price cannot be negative" });
    }

    const product = await Product.create({
      title, description, price, stock, category, image, owner,
    });

    res.status(201).json({ message: "Product created", product });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─────────────────────────────────────────────
// UPDATE a product
// PUT /api/products/:id
// ─────────────────────────────────────────────
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Return updated doc, run schema validators
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product updated", product });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─────────────────────────────────────────────
// DELETE a product
// DELETE /api/products/:id
// ─────────────────────────────────────────────
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─────────────────────────────────────────────
// GET all products by a specific vendor
// GET /api/products/vendor/:userId
// ─────────────────────────────────────────────
const getVendorProducts = async (req, res) => {
  try {
    const products = await Product.find({ owner: req.params.userId })
      .populate("owner", "name") // Show vendor name next to each product
      .lean();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getVendorProducts,
};

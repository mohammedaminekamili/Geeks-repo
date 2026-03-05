const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getVendorProducts,
} = require("../controllers/productController");

// GET    /api/products                  — List all (paginated, filterable)
router.get("/", getProducts);

// GET    /api/products/vendor/:userId   — All products by a specific vendor
router.get("/vendor/:userId", getVendorProducts);

// GET    /api/products/:id              — Single product with seller info
router.get("/:id", getProductById);

// POST   /api/products                  — Create a product
router.post("/", createProduct);

// PUT    /api/products/:id              — Update a product
router.put("/:id", updateProduct);

// DELETE /api/products/:id              — Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;

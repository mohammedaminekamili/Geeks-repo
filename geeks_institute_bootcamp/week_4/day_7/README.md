# 🛒 NexusMarket Backend

A production-ready e-commerce API backend built with **Node.js**, **Express**, and **MongoDB/Mongoose**. This project demonstrates professional backend architecture including layered folder structure, secure authentication-ready data design, performance optimization, and a hybrid relationship model.

---

## 🏗️ Project Structure

```
nexusmarket/
├── config/
│   └── db.js               # MongoDB connection
├── models/
│   ├── User.js             # User schema + bcrypt pre-save hook
│   ├── Product.js          # Product schema + compound index
│   └── Order.js            # Order schema (Snapshot Pattern)
├── controllers/
│   ├── userController.js   # User CRUD logic
│   ├── productController.js # Product CRUD + pagination logic
│   └── orderController.js  # Purchase flow + stock decrement
├── routes/
│   ├── userRoutes.js       # URL → Controller mappings for users
│   ├── productRoutes.js    # URL → Controller mappings for products
│   └── orderRoutes.js      # URL → Controller mappings for orders
├── middleware/
│   └── errorMiddleware.js  # Global 404 + error handler
├── app.js                  # Express config + route mounting
├── server.js               # Entry point — DB connect + listen
├── .env.example            # Environment variable template
└── package.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
# Then edit .env and add your MongoDB connection string
```

### 3. Start the Server
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

The server will start on `http://localhost:5000`.

---

## 📡 API Endpoints

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register a new user |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| DELETE | `/api/users/:id` | Delete a user |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products (paginated) |
| GET | `/api/products?page=2&category=electronics` | Filtered + paginated |
| GET | `/api/products/:id` | Get single product (with seller info) |
| GET | `/api/products/vendor/:userId` | Get all products by a vendor |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Place an order (full purchase flow) |
| GET | `/api/orders` | Get all orders (admin) |
| GET | `/api/orders/:id` | Get single order |
| GET | `/api/orders/buyer/:userId` | Get orders by buyer |
| PATCH | `/api/orders/:id/status` | Update order status |

---

## 🏛️ Design Decisions

### Why are `items` embedded inside `Order` (not referenced)?

This is the **Snapshot Pattern**. If a product's price changes next week, a customer's receipt must still show the price they *actually paid*. By embedding `title` and `priceAtPurchase` at the time of purchase, the order is an immutable historical record. 

Referencing the product would mean the receipt could change retroactively — which is incorrect behavior for any commerce system.

### Why is `buyer` *referenced* in `Order` rather than embedded?

To avoid the **"16MB Trap"**. If we embedded the full order history inside the User document, a user who places 1,000 orders would eventually cause that document to crash against MongoDB's 16MB document limit. By storing a reference in Order pointing *back* to User, a user can have unlimited orders.

### Why is `select: false` set on the password field?

To prevent **accidental password leaks**. Any query using `User.find()` or `User.findById()` will automatically exclude the password field from results. This acts as a safety net — even if a developer forgets to manually remove it, it won't appear in API responses.

### Why is there a Compound Index on `{ category, price }`?

Users frequently filter products by category AND sort by price simultaneously. Without an index, MongoDB performs a full collection scan (reading every single document) — which becomes catastrophically slow at 50,000+ products. The compound index allows MongoDB to jump directly to the matching documents.

### Why use `.lean()` on read-only routes?

By default, Mongoose wraps query results in heavy Document objects with methods like `.save()` and `.populate()`. When we only need to *read* data and send it as JSON, these methods are dead weight. `.lean()` returns a plain JavaScript object — up to 5x faster and uses significantly less memory.

---

## 🔒 Security Features

- **Passwords** are hashed with `bcrypt` (salt rounds: 10) via a pre-save hook
- The `isModified("password")` check prevents re-hashing on unrelated updates
- `select: false` on the password field prevents accidental exposure
- `unique: true` on email prevents duplicate accounts
- Validation errors (negative price, missing required fields) are caught and returned with clear messages

---

## ⚡ Performance Features

- **Compound Index** on `Product.category + Product.price` for fast filtered searches
- **Pagination** on `/api/products` (12 items/page) and `/api/orders` (20 items/page)
- **`.lean()`** on all read-only routes
- **`.select()`** used throughout to minimize network payload
- **`$inc`** operator for atomic stock decrements (prevents race conditions)

# shopkart-backend 🛒

> **Production-grade E-Commerce Backend Service & RESTful API.**

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Database](https://img.shields.io/badge/Database-MongoDB_/_Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

---

## 📖 Overview

`shopkart-backend` is a robust e-commerce RESTful API handling product catalogs, shopping carts, order checkouts, and customer authentication. Built with clean separation of concerns across controllers, middleware, models, and routes.

---

## ✨ Features

- **Authentication & Security:** Secure user registration, login, password hashing with `bcrypt`, and stateless `JWT` session tokens.
- **Product Management:** Full CRUD operations for product inventory, categorized search, filtering, and stock availability checks.
- **Shopping Cart & Orders:** Persistent user cart management, quantity adjustments, price calculations, and checkout pipelines.
- **Robust Middleware:** Centralized error handling, input validation, and protected route guards.

---

## 📁 Project Structure

```text
├── controllers/    # Business logic for auth, products, and orders
├── middlewares/    # Authentication guards and error handlers
├── models/         # Database schemas and data validation
├── routes/         # REST API endpoints routing
├── utils/          # Helper utilities and token generators
├── server.js       # Application entry point & database connection
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js (v18+)**
- **MongoDB** (local instance or MongoDB Atlas)

### Setup & Run
```bash
# Clone the repository
git clone https://github.com/satyamshh967/shopkart-backend.git
cd shopkart-backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Run development server
npm run dev
```

---

## 👤 Author
- **Satyam Sharma** - [@satyamshh967](https://github.com/satyamshh967)

const express = require("express");

const router = express.Router();

const {
  registerCustomer,
  loginCustomer,
  getMyProfile,
  logoutCustomer,
  changePassword,
} = require("../controllers/customer.controller");

const protect = require("../middlewares/auth.middleware");

// Register
router.post("/register", registerCustomer);

// Login
router.post("/login", loginCustomer);

// Protected profile
router.get("/me", protect, getMyProfile);

// Protected logout
router.post("/logout", protect, logoutCustomer);

//Update Password
router.patch("/change-password", protect, changePassword)

module.exports = router;
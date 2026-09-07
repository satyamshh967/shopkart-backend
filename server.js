const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const customerRoutes = require("./routes/customer.routes");

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/customers", customerRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "ShopKart API is running",
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(5000, () => {
      console.log("ShopKart server running on port 5000");
    });
  })
  .catch((error) => {
    console.error(
      "MongoDB connection error:",
      error.message
    );
  });
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

console.log(
  "MONGO_URI exists:",
  !!process.env.MONGO_URI
);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend Working");
});

// Transaction routes
app.use(
  "/api/transactions",
  require("./routes/transactionRoutes")
);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 4000;

// Start server
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
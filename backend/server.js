const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Backend Working");
});

// Transaction routes
app.use("/api/transactions", require("./routes/transactionRoutes"));

const PORT = process.env.PORT || 4000;

console.log("PORT =", PORT);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();
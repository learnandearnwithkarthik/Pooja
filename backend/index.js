const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");

const app = express();

// Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database Not Connected", err));

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow only your frontend
    credentials: true, // Allow cookies and authentication headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

app.use("/uploads", express.static("uploads"));

app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", require("./routes/AuthRoutes.js"));

// Start Server
const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

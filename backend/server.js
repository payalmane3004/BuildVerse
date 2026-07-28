const express = require("express");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const joinRequestRoutes = require("./routes/joinRequestRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const protect = require("./middleware/authMiddleware");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();


connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/join-requests", joinRequestRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("🚀 BuildVerse API Running");
});


app.get("/api/profile", protect, (req, res) => {
  res.json({
    message: "Welcome to BuildVerse!",
    user: req.user,
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
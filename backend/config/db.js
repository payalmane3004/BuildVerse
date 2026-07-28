const dns = require("dns");

// Force Node to use Google's DNS
dns.setServers(["8.8.8.8"]);


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
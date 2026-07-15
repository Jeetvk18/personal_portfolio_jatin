const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "https://personal-portfolio-jatin.vercel.app",
  })
);
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
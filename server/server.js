
const express = require("express");
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");


const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome To BuyBliss !");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

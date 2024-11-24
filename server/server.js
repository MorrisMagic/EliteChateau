require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectCloudinary = require("./config/cloudinary");
const connectdb = require("./config/connectdb");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const cookieParser = require("cookie-parser");
const cartRouter = require("./routes/cartRoutes");
// config
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

//endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.listen(port, () => {
  connectdb();
  connectCloudinary();
  console.log(`Server is running on http://localhost:${port}`);
});

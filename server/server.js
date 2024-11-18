require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const connectdb = require("./connectdb");
const Product = require("./models/Product");

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

app.post("/create/product", async (req, res) => {
  const { name, description, price, size, img, quantity, offers } = req.body;
  try {
    const product = new Product({
      name,
      description,
      price,
      size,
      img,
      quantity,
      offers,
    });
    if (product) {
      await product.save();
      res.status(200).json(product);
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/get/products", async (req, res) => {
  try {
    const product = await Product.find().sort({ createdAt: -1 });
    if (product) {
      res.status(200).json(product);
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/get/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (product) {
      res.status(200).json(product);
    }
  } catch (error) {
    console.log(error);
  }
});

app.put("/update/product/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, price, size, img, quantity, offers } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, size, img, quantity, offers },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

app.delete("/delete/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

app.listen(port, () => {
  connectdb();
  console.log(`Server is running on http://localhost:${port}`);
});

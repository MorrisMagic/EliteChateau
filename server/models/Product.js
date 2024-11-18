const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    size: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      unique: true,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    offers: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;

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
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    SubCategory: {
      type: String,
      required: true,
    },
    img: {
      type: Array,
      required: true,
    },
    size: {
      type: Array,
      required: true,
    },
    bestseller: {
      type: Boolean,
    },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;

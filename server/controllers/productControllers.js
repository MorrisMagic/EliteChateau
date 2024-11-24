const cloudinary = require("cloudinary");
const Product = require("../models/Product");

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      SubCategory,
      size,
      bestseller,
      img,
    } = req.body;
    const images1 = req.files.images1 && req.files.images1[0];
    const images2 = req.files.images2 && req.files.images2[0];
    const images3 = req.files.images3 && req.files.images3[0];
    const images4 = req.files.images4 && req.files.images4[0];
    const images = [images1, images2, images3, images4].filter(
      (img) => img !== undefined
    );
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      SubCategory,
      size: JSON.parse(size),
      bestseller: Boolean(bestseller),
      img: imagesUrl,
    };

    const product = new Product(productData);
    await product.save();
    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Product didn't Add" });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
  }
};

const removeProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.body.id);
    res.json({ message: "product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ message: "product didn't Removed" });
  }
};

// return the info of a single product
const singleProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Product.findById(id);
    res.json({ message: product });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addProduct, listProducts, removeProduct, singleProduct };

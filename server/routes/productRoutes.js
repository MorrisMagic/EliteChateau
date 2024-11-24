const express = require("express");
const {
  addProduct,
  removeProduct,
  singleProduct,
  listProducts,
} = require("../controllers/productControllers");
const upload = require("../middlewares/multer");
const adminAuth = require("../middlewares/AdminAuth");

const productRouter = express.Router();

productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "images1", maxCount: 1 },
    { name: "images2", maxCount: 1 },
    { name: "images3", maxCount: 1 },
    { name: "images4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProducts);

module.exports = productRouter;

const express = require("express");
const {
  addtocart,
  updatecart,
  getusercart,
} = require("../controllers/orderControllers");
const authUser = require("../middlewares/auth");

const cartRouter = express.Router();

cartRouter.post("/get", authUser, getusercart);
cartRouter.post("/add", authUser, addtocart);
cartRouter.post("/update", authUser, updatecart);

module.exports = cartRouter;

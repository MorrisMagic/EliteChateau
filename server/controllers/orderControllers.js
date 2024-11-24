const User = require("../models/User");

const addtocart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userdata = await User.findById(userId);
    let cartdata = await userdata.cartData;
    if (cartdata[itemId]) {
      if (cartdata[itemId][size]) {
        cartdata[itemId][size] += 1;
      } else {
        cartdata[itemId][size] = 1;
      }
    } else {
      cartdata[itemId] = {};
      cartdata[itemId][size] = 1;
    }
    await User.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updatecart = async (req, res) => {};

const getusercart = async (req, res) => {};

module.exports = { addtocart, updatecart, getusercart };

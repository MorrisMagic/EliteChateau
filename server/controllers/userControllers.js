const User = require("../models/User");
const validating = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User doesn't exists" });
    }
    const isMatch = bcrypt.compareSync(password, user?.password || "");
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // check if the user exists or not
    const exists = await User.findOne({ email }).select({ password: -1 });
    if (exists) {
      return res.json({ message: "User Already exists" });
    }
    // validating email format && strong password
    if (!validating.isEmail(email)) {
      return res.json({ message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({ message: "Please enter a strong password" });
    }
    const hashedpassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedpassword,
    });
    if (newUser) {
      await newUser.save();
      const token = createToken(newUser._id);
      res.json({ success: true, token });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { loginUser, registerUser, adminLogin };

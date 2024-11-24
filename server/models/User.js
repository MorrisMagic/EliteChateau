const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
  },
  { timestamps: true, versionKey: false, minimize: false }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;

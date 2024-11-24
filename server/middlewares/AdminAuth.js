const jwt = require("jsonwebtoken");

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ message: "Not Authorized Login Again" });
    }
    const decode_token = jwt.verify(token, process.env.JWT);
    if (decode_token !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ message: "Not Authorized Login Again" });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = adminAuth;

const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not authorizd login again" });
  }
  try {
    const decode_token = jwt.verify(token, process.env.JWT);
    req.body.userId = decode_token.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
module.exports = authUser;

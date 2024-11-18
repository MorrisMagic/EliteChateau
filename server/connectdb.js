const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(connect.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectdb;

require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const getSignedToken = (payload) => {
  const token = jwt.sign(payload, secret);
  console.log(token, "tken");
  return token;
};

module.exports = { getSignedToken };

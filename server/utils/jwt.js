require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const getSignedToken = (payload) => {
  const token = jwt.sign(payload, secret);
  return token;
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

module.exports = { getSignedToken, verifyToken };

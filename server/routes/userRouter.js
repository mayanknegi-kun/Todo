const { Router } = require("express");
const { isUserDataValid } = require("../validations/userValidation");
const { User } = require("../models/user");
const { getSignedToken } = require("../utils/jwt");
const router = Router();

const validateuserData = (req, res, next) => {
  const userData = req.body;
  const validation = isUserDataValid(userData);
  if (validation.success) {
    next();
  } else {
    return res.status(422).json({ error: validation?.error });
  }
};

router.post("/signup", validateuserData, async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "The email address is already in use." });
    }

    const usernameAvailable = await User.findOne({ username });
    if (usernameAvailable?.username) {
      return res.status(400).json({ error: "The username is not available" });
    }

    const user = await User.create({
      username,
      email,
      password,
    });
    const id = { id: user.id };
    const token = getSignedToken(id);

    res.status(200).json({
      userId: id,
      authToken: token,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

router.post("/login", validateuserData, async (req, res) => {
  try {
    const { username, password } = req.body;

    const signedUser = await User.findOne({
      username: username,
      password: password,
    });
    if (!signedUser)
      return res.status(404).json({ msg: "User does not exist" });

    const userId = signedUser._id;
    const id = { id: userId };
    const token = getSignedToken(id);

    res.status(200).json({
      userId: userId,
      authToken: token,
    });
  } catch (err) {
    res.status(400).json({
      err: err,
      msg: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;

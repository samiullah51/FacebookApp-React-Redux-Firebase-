const User = require("../models/User");

const router = require("express").Router();

router.post("/register", async (req, res) => {
  const checkExist = await User.findOne({ email: req.body.email });
  if (checkExist) {
    res.status(300).json({ message: "User already exist" });
    return false;
  }
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      sureName: req.body.sureName,
      email: req.body.email,
      password: req.body.password,
      dob: req.body.dob,
      gender: req.body.gender,
      profilePic: req.body.profilePic,
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;

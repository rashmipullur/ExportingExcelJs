const express = require("express");
const User = require("../models/User");

const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/add", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const user = await new User({ name, email, age }).save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;

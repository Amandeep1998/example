const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send("Error" + error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.send("Error" + error);
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
  });

  try {
    const u1 = await user.save();
    res.json(u1);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

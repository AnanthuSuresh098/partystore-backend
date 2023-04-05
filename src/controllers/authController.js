const express = require("express");

const router = express.Router();


const Users = require("../models/user.model");


router.post("", async (req, res) => {
  try {
    const user = await Users.create(req.body);
    return res.send(user);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("", async (req, res) => {
  try {
    const user = await Users.find().lean().exec();
    return res.send(user);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/login/:phone", async (req, res) => {
  try {
    const user = await Users.find(
      {phone: req.params.phone}
    )
      .lean()
      .exec();  
    return res.send(user);  
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("", async (req, res) => {
  try {
    const user = await Users.deleteMany().lean().exec();
    return res.send(user);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
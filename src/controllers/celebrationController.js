const express = require("express");

const router = express.Router();

const Celebrations = require("../models/celebration.model");

router.get("", async (req, res) => {
  try {
    const celebrations = await Celebrations.find().lean().exec();
    console.log(celebrations);
    return res.send(celebrations);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("", async (req, res) => {
  try {
    const celebration = await Celebrations.create(req.body);
    return res.send({ celebration });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const celebration = await Celebrations.findById(req.params.id)
      .lean()
      .exec();
    return res.send(celebration);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const celebration = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send({ celebration });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const celebration = await Celebrations.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(celebration);
  } catch (err) {
    return res.status(500).send(err);
  }
});


module.exports = router;

const express = require("express");

const router = express.Router();

const Festivals = require("../models/festival.model");

const FestivalCategory = require("../models/festivalCategory.model");

// All Festivals Route

router.get("", async (req, res) => {
  try {
    const festivals = await Festivals.find().lean().exec();
    return res.send(festivals);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("", async (req, res) => {
  try {
    const festival = await Festivals.create(req.body);
    return res.send({ festival });
  } catch (err) {
    return res.status(500).send(err);
  }
});

// Festivals Category Routes

router.post("/:category", async (req, res) => {
  try {
    const festivalcategory = await FestivalCategory.create(req.body);
    return res.send({ festivalcategory });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:category", async (req, res) => {
  try {
    const festivalcategory = await FestivalCategory.find({
      category: req.params.category,
    })
      .lean()
      .exec();
    return res.send(festivalcategory);
  } catch (err) {
    return res.status(500).send(err);
  }
});

// Festivals id Route

router.patch("/:id", async (req, res) => {
  try {
    const festivals = await Festivals.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send({ festivals });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const festivals = await Festivals.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(festivals);
  } catch (err) {
    return res.status(500).send(err);
  }
});


// All Festivals id Route

router.get("/:category/:id", async (req, res) => {
  try {
    const festivalcategory = await FestivalCategory.findById(req.params.id)
      .lean()
      .exec();  
    return res.send(festivalcategory);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.patch("/:category/:id", async (req, res) => {
  try {
    const festivalcategory = await FestivalCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send({ festivalcategory });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/:category/:id", async (req, res) => {
  try {
    const festivalcategory = await FestivalCategory.findByIdAndDelete(
      req.params.id
    )
      .lean()
      .exec();
    return res.status(200).send(festivalcategory);
  } catch (err) {
    return res.status(500).send(err);
  }
});


module.exports = router;
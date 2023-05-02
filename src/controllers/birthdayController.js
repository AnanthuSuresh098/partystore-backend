const express = require("express");

const router = express.Router();

const Birthdays = require("../models/birthday.model");

const BirthdayCategory = require("../models/birthdayCategory.model");

// Birthdays Category Routes

router.post("/:theme", async (req, res) => {
  try {
    const birthdaythemes = await Birthdays.create(req.body);
    return res.send({ birthdaythemes });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:theme", async (req, res) => {
  try {
    const birthdaythemes = await Birthdays.find({
      theme: req.params.theme,
    })
      .lean()
      .exec();
    return res.send(birthdaythemes);
  } catch (err) {
    return res.status(500).send(err);
  }
});

// Celebrations Category Routes

router.post("/:theme/:category", async (req, res) => {
  try {
    const birthdaycategory = await BirthdayCategory.create(req.body);
    return res.send({ birthdaycategory });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:theme/:category", async (req, res) => {
  try {
    const birthdaycategory = await BirthdayCategory.find({
      category: req.params.category,
    })
      .lean()
      .exec();
    return res.send(birthdaycategory);
  } catch (err) {
    return res.status(500).send(err);
  }
});


// Birthdays category id Route

router.get("/:theme/:category/:id", async (req, res) => {
  try {
    const birthdaycategory = await BirthdayCategory.findById(req.params.id)
      .lean()
      .exec();
    return res.send(birthdaycategory);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.patch("/:theme/:category/:id", async (req, res) => {
  try {
    const birthdaycategory = await BirthdayCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send({ birthdaycategory });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/:theme/:category/:id", async (req, res) => {
  try {
    const birthdaycategory = await BirthdayCategory.findByIdAndDelete(
      req.params.id
    )
      .lean()
      .exec();
    return res.status(200).send(birthdaycategory);
  } catch (err) {
    return res.status(500).send(err);
  }
});


module.exports = router;
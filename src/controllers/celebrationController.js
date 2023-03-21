const express = require("express");

const router = express.Router();

const Celebrations = require("../models/celebration.model");

const CelebrationCategory = require("../models/celebrationCategory.model");

// All Celebrations Route

router.get("", async (req, res) => {
  try {
    const celebrations = await Celebrations.find().lean().exec();
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


// Celebrations Category Routes

router.post("/:category", async (req, res) => {
  try {
    const celebrationcategory = await CelebrationCategory.create(req.body);
    return res.send({ celebrationcategory });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:category", async (req, res) => {
  try {
    const celebrationcategory = await CelebrationCategory.find({category:req.params.category}).lean().exec();
    return res.send(celebrationcategory);
  } catch (err) {
    return res.status(500).send(err);
  }
});




// Celebrations id Route

router.patch("/:id", async (req, res) => {
  try {
    const celebrations = await Celebrations.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send({ celebrations });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const celebrations = await Celebrations.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(celebrations);
  } catch (err) {
    return res.status(500).send(err);
  }
});


// All Celebrations id Route

router.get("/:category/:id", async (req, res) => {
  try {
    const celebrationcategory = await CelebrationCategory.findById(
      req.params.id
    )
      .lean()
      .exec();  
    return res.send(celebrationcategory);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.patch("/:category/:id", async (req, res) => {
  try {
    const celebrationcategory = await CelebrationCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send({ celebrationcategory });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/:category/:id", async (req, res) => {
  try {
    const celebrationcategory = await CelebrationCategory.findByIdAndDelete(
      req.params.id
    )
      .lean()
      .exec();
    return res.status(200).send(celebrationcategory);
  } catch (err) {
    return res.status(500).send(err);
  }
});



module.exports = router;

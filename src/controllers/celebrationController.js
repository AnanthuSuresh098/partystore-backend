const express = require("express");

const router = express.Router();

const Celebrations = require("../models/celebration.model");

const CelebrationCategory = require("../models/celebrationCategory.model");

const celebration_prod = [
  {
    category: "Baby Arrival",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704854/Zinggalas/Celebrations/baby-arrival_jaclgo.jpg",
    rating: "4",
    description:
      "Like to do things differently? Host A Baby Arrival Party with zinggalas",
  },
  {
    category: "House Warming",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704860/Zinggalas/Celebrations/house-warming_s9r600.jpg",
    rating: "4",
    description:
      "Like to do things differently? Host A House Warming Party with zinggalas",
  },
  {
    category: "Congrats Party",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704856/Zinggalas/Celebrations/congrats_bk7mde.jpg",
    rating: "5",
    description:
      "Like to do things differently? Host A Congrats Party with zinggalas",
  },
  {
    category: "21 Days Cradle Ceremony",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704858/Zinggalas/Celebrations/cradle_pn7xdi.png",
    rating: "3",
    description:
      "Like to do things differently? Host A Cradle Ceremony with zinggalas",
  },
  {
    category: "Naming Ceremony",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704860/Zinggalas/Celebrations/naming_ngduwa.jpg",
    rating: "4",
    description:
      "Like to do things differently? Host A Naming Ceremony with zinggalas",
  },
  {
    category: "Retirement Party",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704861/Zinggalas/Celebrations/retirement_vxah8b.jpg",
    rating: "4",
    description:
      "Like to do things differently? Host A Retirement Party with zinggalas",
  },
  {
    category: "Saree Function",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704862/Zinggalas/Celebrations/saree_eieock.jpg",
    rating: "5",
    description:
      "Like to do things differently? Host A Saree Function with zinggalas",
  },
  {
    category: "Bridal Shower",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704855/Zinggalas/Celebrations/bridal_vtm9fc.jpg",
    rating: "5",
    description:
      "Like to do things differently? Host A Bridal Shower with zinggalas",
  },
  {
    category: "Engagement",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704859/Zinggalas/Celebrations/engagement_bp0ksz.webp",
    rating: "4",
    description:
      "Like to do things differently? Host An Engagement with zinggalas",
  },
  {
    category: "Bachelorette Party",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704854/Zinggalas/Celebrations/bachelorette_ckaera.jpg",
    rating: "5",
    description:
      "Like to do things differently? Host A Bachelorette Party with zinggalas",
  },
  {
    category: "Wedding Anniversary",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704853/Zinggalas/Celebrations/anniversary_txqlxx.jpg",
    rating: "5",
    description:
      "Like to do things differently? Host A Wedding Anniversary with zinggalas",
  },
  {
    category: "Baby Shower",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704855/Zinggalas/Celebrations/baby-shower_cas3qt.jpg",
    rating: "4",
    description:
      "Like to do things differently? Host A Baby Shower with zinggalas",
  },
  {
    category: "Dhoti Function",
    image:
      "https://res.cloudinary.com/dbaz7mhye/image/upload/v1706704858/Zinggalas/Celebrations/dhothi_yjchep.jpg",
    rating: "5",
    description:
      "Like to do things differently? Host A Dhoti Function with zinggalas",
  }
];

// All Celebrations Route

router.get("", async (req, res) => {
  try {
    const celebrations = await Celebrations.find().lean().exec();
    return res.send(celebrations);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("/:prod" , async (req, res) => {
  try {
    const celebration= await Celebrations.insertMany(celebration_prod)
    return res.send(celebration);
   }catch (err) {
    return res.status(500).send(err);
  }
})

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

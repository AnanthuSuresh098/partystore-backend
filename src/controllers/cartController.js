const express = require("express");

const router = express.Router();

const Users = require("../models/user.model");

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id).lean().exec();
    console.log(user);
    return res.send({cartItems:user.cartItems});
  } catch (err) {
    return res.status(500).send(err);
  }
});


router.post("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id)
    console.log(user);
    
   let products = {
     productName: req.body.productName,
     description: req.body.description,
     price: req.body.price,
     image: req.body.image,
   };

   user.cartItems.push(products);

     user.save((err, updatedUser) => {
       if (err) {
         console.error(err);
       } else {
         console.log("User updated successfully:", updatedUser);
       }
     });

    return res.send({cartItems:user.cartItems});
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports=router;

const express = require("express");

const router = express.Router();

// const Users = require("../models/user.model");

// router.get("/:id", async (req, res) => {
//   try {
//     const user = await Users.findById(req.params.id).lean().exec();
//     // console.log(user);
//     return res.send({cartItems:user.cartItems});
//   } catch (err) {
//     return res.status(500).send(err);
//   }
// });

// router.post("/:id", async (req, res) => {
//   try {
//     const user = await Users.findById(req.params.id)
//     // console.log(user);
    
//    let products = {
//      productName: req.body.productName,
//      description: req.body.description,
//      price: req.body.price,
//      image: req.body.image,
//    };

//    user.cartItems.push(products);

//      user.save((err, updatedUser) => {
//        if (err) {
//          console.error(err);
//        } else {
//          console.log("User updated successfully:", updatedUser);
//        }
//      });

//     return res.send({cartItems:user.cartItems});
//   } catch (err) {
//     return res.status(500).send(err);
//   }
// });

// router.delete("/:id/:itemId", async (req, res) => {
//   try {
//     const user = await Users.findById(req.params.id);
//     const itemId = req.params.itemId;
    

//     const itemIndexToRemove = user.cartItems.findIndex(item => item.id === itemId);

//     if (itemIndexToRemove !== -1) {
//       user.cartItems.splice(itemIndexToRemove, 1);
//       console.log("Item removed:", user.cartItems);
//       return res.send({ cartItems: user.cartItems });
//     } else {
//       console.log("false");
//     }
//   } catch (err) {
//     return res.status(500).send(err);
//   }
// });




// module.exports=router;



const Cart = require("../models/cart.model");

// Create a new cart for a user
const createCart = async (req, res) => {
  const { userId } = req.body;

  try {
    const cart = await Cart.create({ userId });
    res.status(201).json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get user's cart
const getUserCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId }).populate(
      "items.productId",
      "name price"
    ); // Assuming 'name' and 'price' are fields in the Product model
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Add item to cart
const addItemToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create a new cart if it doesn't exist for the user
      cart = await Cart.create({ userId });
    }

    // Check if the product already exists in the cart, update quantity if it does
    const existingProductIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (existingProductIndex !== -1) {
      cart.items[existingProductIndex].quantity += quantity;
    } else {
      // If the product is not in the cart, add it
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Remove item from cart
const removeItemFromCart = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );
    await cart.save();
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// POST request to create a new cart for a user
router.post('', createCart);

// GET request to retrieve a user's cart
router.get('/:userId', getUserCart);

// POST request to add an item to a user's cart
router.post('/:userId/addItem', addItemToCart);

// DELETE request to remove an item from a user's cart
router.delete('/:userId/removeItem/:productId', removeItemFromCart);

module.exports = router;


const express = require("express");
const mongoose = require("mongoose");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

// Helper: fetch a cart for a logged-in user or a guest
const getCart = async (userId, guestId) => {
  if (userId) return await Cart.findOne({ user: userId });
  if (guestId) return await Cart.findOne({ guestId });
  return null;
};

// @route   POST /api/cart
// @desc    Add a product to the cart for a guest or logged-in user
// @access  Public
router.post("/", async (req, res) => {
  try {
    let { productId, quantity = 1, size, color, guestId, userId } = req.body;

    // Trim productId and convert quantity to number
    if (!productId) return res.status(400).json({ message: "productId is required" });
    productId = productId.trim();
    const qty = Number(quantity) || 1;
    if (qty <= 0) return res.status(400).json({ message: "quantity must be > 0" });

    // Validate productId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid productId" });
    }

    // Load product
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Get existing cart
    let cart = await getCart(userId, guestId);

    if (cart) {
      // Find existing item with same productId, size, color
      const idx = cart.products.findIndex(
        (p) =>
          p.productId.toString() === productId &&
          p.size === size &&
          p.color === color
      );

      if (idx > -1) {
        // Update quantity
        cart.products[idx].quantity += qty;
      } else {
        // Add new product to cart
        cart.products.push({
          productId,
          name: product.name,
          image: product.images?.[0]?.url || "",
          price: Number(product.price),
          size,
          color,
          quantity: qty,
        });
      }

      // Update total price
      cart.totalPrice = cart.products.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
      );

      await cart.save();
      return res.status(200).json(cart);
    }

    // No existing cart -> create new cart
    const newCart = await Cart.create({
      user: userId || undefined,
      guestId: guestId || `guest_${Date.now()}`,
      products: [
        {
          productId,
          name: product.name,
          image: product.images?.[0]?.url || "",
          price: Number(product.price),
          size,
          color,
          quantity: qty,
        },
      ],
      totalPrice: Number(product.price) * qty,
    });

    return res.status(201).json(newCart);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});
// @route PUT /api/cart
// @desc Update product quantity in the cart for a guest or logged-in user
// @access Public
router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;

  try {
    let cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );
    if(productIndex>-1){
      if (quantity > 0) {
  cart.products[productIndex].quantity = quantity;
} else {
  cart.products.splice(productIndex, 1);
}

      cart.totalPrice= cart.products.reduce((acc,item)=> acc+item.price*item.quantity,0);
      await cart.save();
       return res.status(200).json(cart);
    }
    else{
      return res.status(404).json({message:"Product not found in the cart "});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({message:" Server Error "});
  }
});
// @route DELETE /api/cart
// @desc Remove a product from the cart
// @access Public
router.delete("/", async (req, res) => {
  const { productId, size, color, guestId, userId } = req.body;
  try {
    let cart = await getCart(userId, guestId);

    if (!cart) return res.status(404).json({ message: "cart not found" });

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );

    // If product is found, remove it
    if (productIndex > -1) {
      cart.products.splice(productIndex, 1);

      // Recalculate total price
      cart.totalPrice = cart.products.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});
// @route GET /api/cart
// @desc Get logged-in user's or guest user's cart
// @access Public
router.get("/", async (req, res) => {
  const { userId, guestId } = req.query;

  try {
    const cart = await getCart(userId, guestId);
    if (cart) {
      res.json(cart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
// @route   POST /api/cart/merge
// @desc    Merge guest cart into user cart on login
// @access  Private
router.post("/merge", protect, async (req, res) => {
  const { guestId } = req.body; // get guestId from request body

  try {
    // Find guest cart (using guestId) and user cart (using logged-in user)
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: req.user._id });

    // If guest cart does not exist
    if (!guestCart) {
      return res.status(404).json({ message: "Guest cart not found" });
    }

    // If guest cart is empty
    if (guestCart.products.length === 0) {
      return res.status(400).json({ message: "Guest cart is empty" });
    }

    if (userCart) {
      // CASE 1: User already has a cart → merge guest cart into user cart
      guestCart.products.forEach((guestItem) => {
        const productIndex = userCart.products.findIndex(
          (item) =>
            item.productId.toString() === guestItem.productId.toString() &&
            item.size === guestItem.size &&
            item.color === guestItem.color
        );

        if (productIndex > -1) {
          // If the item exists in the user cart → update quantity
          userCart.products[productIndex].quantity += guestItem.quantity;
        } else {
          // If the item does not exist → add it to the cart
          userCart.products.push(guestItem);
        }
      });

      // Recalculate total price after merging
      userCart.totalPrice = userCart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await userCart.save();

      // Delete guest cart after merging
      try {
        await Cart.findOneAndDelete({ guestId });
      } catch (error) {
        console.error("Error deleting guest cart:", error);
      }

      return res.status(200).json(userCart);
    } else {
      // CASE 2: User has no cart → assign guest cart to user
      guestCart.user = req.user._id;
      guestCart.guestId = undefined; // remove guestId
      await guestCart.save();

      return res.status(200).json(guestCart);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;

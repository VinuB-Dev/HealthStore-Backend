const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: String,
  imageURL: String,
  rating: Number,
  no_of_rating: Number,
  original_price: Number,
  final_price: Number,
  hasFastDelivery: Boolean,
  hasCashOnDelivery: Boolean,
  isInStock: Boolean,
  description: String,
  wishListed: { 
    type: Boolean, 
    default: false 
  },
  isInCart: { 
    type: Boolean, 
    default: false 
  },
  quantityInCart: {
    type: Number,
    default: 0
  }
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
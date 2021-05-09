const express = require('express')
const router = express.Router()
const { products } = require('../data/product_data')
const Product = require("../models/product.model");


function insertData() {
  products.map((product) => {
    let products_new = new Product(product)
    products_new.save();
  })
}

router.route('/')
  .get(async (req, res) => {
    try {
      const products = await Product.find({});
      res.json({ success: true, products })
    }
    catch (error) {
      res.status(500).json({ success: false, message: "route not found" })
    }
  })
  .post(async (req, res) => {
    try {
      await insertData();
      res.json({ success: true, products: products })
    }
    catch (err) {
      res.status(500).json({ success: false, message: "route not found" })
    }
  })



module.exports = router


var express = require("express");
var router = express.Router();
const schemas = require("../models/schemas");
const { ObjectId } = require("mongodb");

/* GET home page. */
router.get("/", async (req, res) => {
    try {
        const products = schemas.Products;

        const productsData = await products.find({}).exec();

        if (productsData) {
            res.send(JSON.stringify(productsData));
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/create-products", async (req, res) => {
    try {
        const data = req.body;

        const newProduct = new schemas.Products(data);
        const saveProduct = await newProduct.save();

        if (data) {
            res.status(200).json({
                Message: saveProduct,
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

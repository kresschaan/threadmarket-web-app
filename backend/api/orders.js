var express = require("express");
var router = express.Router();
const schemas = require("../models/schemas");
const { ObjectId } = require("mongodb");

/* GET home page. */
router.get("/", async (req, res) => {
    try {
        const orders = schemas.Orders;

        const ordersData = await orders.find({}).exec();

        if (ordersData) {
            res.send(JSON.stringify(ordersData));
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/create-orders", async (req, res) => {
    try {
        const data = req.body;

        const newOrder = new schemas.Orders(data);
        const saveOrder = await newProduct.save();

        if (data) {
            res.status(200).json({
                Message: saveOrder,
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

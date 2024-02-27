var express = require("express");
var router = express.Router();
const schemas = require("../models/schemas");
const { ObjectId } = require("mongodb");

/* GET home page. */
router.get("/", async (req, res) => {
    try {
        const users = schemas.Users;

        const usersData = await users.find({}).exec();

        if (usersData) {
            res.send(JSON.stringify(usersData));
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/create-user", async (req, res) => {
    try {
        const data = req.body;

        const newUser = new schemas.Users(data);
        const saveUser = await newUser.save();

        if (data) {
            res.status(200).json({
                Message: saveUser,
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

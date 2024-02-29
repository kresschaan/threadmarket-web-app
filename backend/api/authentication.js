var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const schemas = require("../models/schemas");
const { ObjectId } = require("mongodb");

const secretKey = process.env.SECRET_KEY;

router.post("/verify-user", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await schemas.Users.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: "Username not found" });
        }

        // Compare the provided password with the hashed password stored in the database
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Generate a JWT token for authentication
        const token = jwt.sign({ id: user._id }, secretKey, {
            expiresIn: "1h",
        });

        // Send the token in the response
        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({
            token: token,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred." });
    }
});

module.exports = router;

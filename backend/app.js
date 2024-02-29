require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var logger = require("morgan");

var usersAPI = require("./api/users");
var productsAPI = require("./api/products");
var ordersAPI = require("./api/orders");
var paymentsAPI = require("./api/payment");
var authenticationAPI = require("./api/authentication");

var app = express();
const port = process.env.PORT || 3010;
const mongoKeys = process.env.DB_CONN;

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", usersAPI);
app.use("/api/products", productsAPI);
app.use("/api/orders", ordersAPI);
app.use("/api/authenticate", authenticationAPI);
app.use("/api/payment", paymentsAPI);

mongoose
    .connect(mongoKeys)
    .then(() => {
        // console.log("Connected to MongoDB");
    })
    .catch((err) => console.log(err));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;

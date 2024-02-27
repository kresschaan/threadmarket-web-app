const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String },
    category: { type: String },
    description: { type: String },
    price: { type: Number },
    sizes: [
        {
            type: String,
        },
    ],
    image: [
        {
            type: String,
        },
    ],
});

const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String },
    password: { type: String },
    address: { type: String },
    birthdate: { type: Date },
    email: { type: String },
});

const orderSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    streetAdd1: { type: String },
    streetAdd2: { type: String },
    phone: { type: Number },
    subtotal: { type: Number },
    shipping: { type: Number },
    tax: { type: Number },
    total: { type: Number },
    shippingOption: { type: String },
});

const Products = mongoose.model("product", productSchema, "products");
const Users = mongoose.model("user", userSchema, "users");
const Orders = mongoose.model("order", orderSchema, "orders");
const mySchemas = { Products: Products, Users: Users, Orders: Orders };

module.exports = mySchemas;

const path = require("path");

const express = require("express")

const router = express.Router();

const products = [];

router.get("/order", (req, res, next) => {
    console.log(products);
    res.render("order", {pageTitle: "Order", path: "/order"});
})

router.post("/order", (req, res, next) => {
    products.push({amount: req.body.amount, type: req.body.type, type: req.body.email});
    res.redirect("/");
})

exports.routes = router;
exports.product = products;
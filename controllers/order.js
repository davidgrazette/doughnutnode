const Order = require("../models/order");

exports.getOrder = (req, res, next) => {
    res.render("order", {pageTitle: "Order", path: "/order"});
}

exports.postOrder = (req, res, next) => {
    const order = new Order(req.body.amount);
    order.save();
    res.redirect("/");
}
const Order = require("../models/order");

exports.getOrder = (req, res, next) => {
    res.render("order", {pageTitle: "Order", path: "/order"});
}

exports.postOrder = (req, res, next) => {
    const name = req.body.name;  
    const phone = req.body.phone;
    const email = req.body.email; 
    const type = req.body.type; 
    const amount = req.body.amount; 
    const address = req.body.address;
    const notes = req.body.notes;
    const order = new Order(name, phone, email, type, amount, address, notes);
    order.save();
    res.redirect("/");
}

exports.getCheckout = (req, res, next) => {
    res.render("checkout", {pageTitle: "checkout", path:"/checkout"});
}

exports.postCheckout = (req, res, next) => {};
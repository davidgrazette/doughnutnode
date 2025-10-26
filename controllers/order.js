const products = [];

exports.getOrder = (req, res, next) => {
    console.log(products);
    res.render("order", {pageTitle: "Order", path: "/order"});
}

exports.postOrder = (req, res, next) => {
    products.push({amount: req.body.amount, type: req.body.type, type: req.body.email});
    res.redirect("/");
}
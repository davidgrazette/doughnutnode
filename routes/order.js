const path = require("path");

const express = require("express")

const orderControllers = require("../controllers/order")

const router = express.Router();

router.get("/order", orderControllers.getOrder);

router.post("/order", orderControllers.postOrder);

router.get("/checkout", orderControllers.getCheckout)

router.post("/checkout", orderControllers.postCheckout);


module.exports = router;
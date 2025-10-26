const path = require("path");

const express = require("express")

const orderControllers = require("../controllers/order")

const router = express.Router();

router.get("/order", orderControllers.getOrder);

router.post("/order", orderControllers.postOrder);


module.exports = router;
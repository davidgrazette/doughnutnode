const path = require("path");

const express = require("express")

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("home", {pageTitle: "doughnuts (donuts)", path: "/"});
})

router.get("/how-to", (req, res, next) => {
    res.render("how-to", {pageTitle: "How to...", path: "/how-to"});
})

module.exports = router;
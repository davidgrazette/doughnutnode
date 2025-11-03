const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const compression = require("compression")

app.set("view engine", "ejs");
// app.set("views", "views");

const errorController = require("./controllers/error");

const mongoConnect = require("./util/database").mongoConnect;

const homeRoutes = require("./routes/home");
const orderRoutes = require("./routes/order");

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
app.use(orderRoutes);

app.use(errorController.get404);


app.use(compression());

mongoConnect(() => {
    app.listen(process.env.PORT || 3000);
});
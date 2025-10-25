const http = require("http");

const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
// app.set("views", "views");


const homeRoutes = require("./routes/home");
const adminData = require("./routes/order");
const routes404 = require("./routes/admin");

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
app.use(adminData.routes);

app.use(routes404);


app.listen(3000);

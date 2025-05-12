const express = require('express');
const app = express();
const path = require('path');



app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.get("/", function (req, res) {
    res.render("index");


})
app.get("/cottonSarees", function (req, res) {
    res.render("cottonSarees");


})
app.get("/AboutUs", function (req, res) {
    res.render("AboutUs");


})
app.get("/FancySarees", function (req, res) {
    res.render("FancySarees");


})








app.listen(3020);
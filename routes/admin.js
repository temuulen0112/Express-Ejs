const express = require('express');
const app = express();
const path = require("path")

// Setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.set("view option", { layout: false } );

const { quotes } = require('../data.json');

app.get("/", (req, res) => {
    return res.redirect("index", { data: "This is server sending data!" });
})

app.use("/quotes", (req, res) => {
    res.render("quotes", { title: "Quote lists", quotes });
})

app.use("/quote/:id", (req, res) => {
    const id = req.params.id;
    const result = quotes.filter(quotes => quotes.id == id);
    res.render("quote", { title: "Quote", result})
})

app.get('/404', (req, res) => {
    res.render('404', {message: 'oopsie!'})
})

// app.get("/", (req, res) => {
//     res.redirect("/quotes")
// })

module.exports = app;
const express = require('express');
const app = express();
const port = 3002;
app.use(express.json());
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view option", { layout: false } );

const { quotes } = require('./data.json');

app.use("/quotes", (req, res) => {
    res.render("quotes", { title: "Quote lists", quotes });
})

app.use("/quote/:id", (req, res) => {
    const id = req.params.id;
    const result = quotes.filter(quotes => quotes.id == id);
    res.render("quote", { title: "Quote", result})
})

app.get('/', (req, res) => {
    res.render('index', {name: 'Temuulen'})
})

app.get('/404', (req, res) => {
    res.render('404', {message: 'oopsie!'})
})

app.get("/", (req, res) => {
    res.redirect("/quotes")
})

// app.all('*', (req, res, next) => {

// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
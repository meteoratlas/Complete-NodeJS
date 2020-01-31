const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const publicDirectory = path.join(__dirname, "../public");
const viewsDirectory = path.join(__dirname, "../templates/views");
const partialsDirectory = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsDirectory);
hbs.registerPartials(partialsDirectory);
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather Map",
        name: "Kelly"
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help Page",
        name: "Kelly"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Page",
        name: "Kelly"
    });
});

app.get("/weather", (req, res) => {
    res.send({ location: "Your City", temperate: 4.02 });
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        errorMessage: "404 - no such help article exists.",
        title: "404",
        name: "Kelly"
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        errorMessage: "404 - requested page could not be found.",
        title: "404",
        name: "Kelly"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

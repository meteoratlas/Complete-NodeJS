const express = require("express");

const app = express();

app.get("", (req, res) => {
    res.send("<h1>Hello Express</h1>");
});

app.get("/help", (req, res) => {
    res.send({ name: "Help Page Title", helpTopics: 24 });
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.get("/weather", (req, res) => {
    res.send({ location: "Your City", temperate: 4.02 });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

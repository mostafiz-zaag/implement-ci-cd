const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World from Express!");
});

app.post("/", (req, res) => {
    res.send("Hello World, POST from Express!");
});

module.exports = app;

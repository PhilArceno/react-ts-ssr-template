"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(path.join(__dirname, "..", "dist")));
var template = path.resolve(__dirname, "..", "index.html");
app.get("", function (req, res, next) {
    res.sendFile(template);
});
app.listen(4000, function () {
    console.log("Server running on port 4000");
});

const express = require("express");
const app = express();
const path = require("path");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/data", express.static(path.join(__dirname + "/data")));

app.listen(5001);
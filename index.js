var express = require("express");
var app = express();

var retrieval = require("./retrieval.js")

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

retrieval.init(app);

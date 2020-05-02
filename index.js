var express = require("express");
var app = express();

var retrieval = require("./get/retrieval.js")

app.listen(3001, () => {
 console.log("Server running on port 3001");
});

retrieval.init(app);

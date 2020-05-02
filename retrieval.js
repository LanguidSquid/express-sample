var express = require("express");

let basicSample = function(req, res, next) {
  res.json(["Blake", "Kacey", "Maya", "Huxley", "Blu"]);
};

var init = function(app) {
  app.get("/url", basicSample);
};

exports.init = init;

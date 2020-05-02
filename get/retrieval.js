var express = require("express");
var data = require("../data/data-model.json");

let crew = function(req, res, next) {
  res.json(data);
};

let location = function(req, res, next) {
  res.json(data.location);
};

let members = function(req, res, next) {
  if(!Object.keys(req.query).length) {
    res.json(data.members);
  }else {
    res.json(filterMembersByFirstName(req.query.firstName));
  }
};

let filterMembersByFirstName = function(firstName) {
  return data.members.find(function(member){
    return member.firstName.toLowerCase() == firstName.toLowerCase();
  });
};

var init = function(app) {
  app.get("/crew", crew);
  app.get("/crew/location", location);
  app.get("/crew/members", members);
};

exports.init = init;

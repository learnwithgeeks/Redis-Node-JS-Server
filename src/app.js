// This is our main app js file

import express from "express";
import mongoose from "mongoose";
const app = express();
var redisClient = require("redis").createClient;

mongoose.connect("mongodb://192.168.99.101:32768", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database is connected");
    var redis = redisClient(32760, "192.168.99.101");
    redis.on("error", function(err) {
      console.log("Error " + err);
    });
  }
});

export { app };

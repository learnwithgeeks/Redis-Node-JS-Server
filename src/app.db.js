// This is  app js db connection file

// Importing 3rd Party Modules
import mongoose from "mongoose";
import redis from "async-redis";

// Redis Client
let client;

// Connection For Mongodb and Redis
mongoose.connect("mongodb://192.168.99.100:32761", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database is connected");
    client = redis.createClient(32760, "192.168.99.100");
    client.on("error", function(err) {
      console.log("Error " + err);
    });
  }
});

export { client };

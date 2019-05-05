// This Module contain all middlewares

// Importing 3rd Party Modules
import bodyParser from "body-parser";
import morgan from "morgan";
import { router } from "./redis/redis.router.js";
import { errors } from "celebrate";

// Parse application/x-www-form-urlencoded
const urlEndcoded = bodyParser.urlencoded({ extended : false });

// Parse application/json
const json = bodyParser.json();

// Tiny morgan logger
const logger = morgan("tiny");

// Throw Celebrate Validation Error
const validationError = errors();

// Throw Error From Controllers
const error = (err , req , res , next) => {
  throw Error(err);
};

// Exporting Middleware for app
export { urlEndcoded , json , logger , router , validationError , error };

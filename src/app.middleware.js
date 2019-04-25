// This Module contain all middlewares

// Importing 3rd Party Modules
import bodyParser from "body-parser";
import morgan from "morgan";
import { router } from "./redis/redis.router.js";

// Parse application/x-www-form-urlencoded
const urlEndcoded = bodyParser.urlencoded({ extended: false });

// Parse application/json
const json = bodyParser.json();

// Tiny morgan logger
const logger = morgan("tiny");

// Exporting Middleware for app
export { urlEndcoded, json, logger, router };

// This Module contain all endpoints

// Importing 3rd Party Module
import express from "express";

// Importing User Defined Module
import { postBook , getBookFromTitle } from "./redis.controller";
import { postBookValidate , getBookFromTitleValidate } from "./redis.validation";

// Express Router
const router = express.Router();

// API Route
router.route("/book").post(postBookValidate , postBook);
router.route("/book/:title").get(getBookFromTitleValidate , getBookFromTitle);

// Exporting Routes
export { router };

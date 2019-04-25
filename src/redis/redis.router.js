// This Module contain all endpoints

// Importing 3rd Party Module
import express from "express";

// Importing User Defined Module
import { postBook, getBookFromTitle } from "./redis.controller";

// Express Router
const router = express.Router();

// API Route
router.route("/book").post(postBook);
router.route("/book/:title").get(getBookFromTitle);

// Exporting Routes
export { router };

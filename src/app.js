// This is our main app js file

// Importing 3rd Party Module
import express from "express";

// Importing Express Container
const app = express();

// Importing User Defined Modules
import db from "./app.db";
import {
  urlEndcoded ,
  json ,
  logger ,
  router ,
  validationError ,
  error
} from "./app.middleware";

// Middlewares
app.use(urlEndcoded);
app.use(json);
app.use(logger);
app.use(router);
app.use(validationError);
app.use(error);

// Exporting app
export { app };

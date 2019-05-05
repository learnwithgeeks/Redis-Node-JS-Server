// This module contain db model

// Importing 3rd Party Module
import mongoose from "mongoose";
const { Schema } = mongoose;

// Creating DB Schema
const book = new Schema({
  title : { type : String , required : true } ,
  author : { type : String , required : true } ,
  text : { type : String }
});

// Creating Book Model
const BookModel = mongoose.model("book" , book);

// Exporting Book Model
export { BookModel };

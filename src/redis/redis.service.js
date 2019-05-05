// This Module contain all db services of mongodb and redis

// Importing User Defined Module
import To from "await-to-js";

// Importing User Defined Module
import { BookModel } from "./redis.model";
import { client } from "../app.db";

module.exports = {
  addBook : async fields => {
    const book = new BookModel(fields);
    const [err , addBook] = await To(book.save());
    return { err , addBook };
  } ,
  getBook : async title => {
    const [err , getBook] = await To(BookModel.find({ title }));
    return { err , getBook };
  } ,
  redisGet : async title => {
    const [err , getBook] = await To(client.get(title));
    return { err , getBook };
  } ,
  redisSet : async (title , value) => {
    const [err , setBook] = await To(client.set(title , value));
    return { err , setBook };
  }
};

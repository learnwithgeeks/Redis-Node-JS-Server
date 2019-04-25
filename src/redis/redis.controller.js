// This Module contain all controller

// Importing User Defined Module
import { addBook, getBook, redisGet, redisSet } from "./redis.service";

// This Controller will add book in db
const postBook = async (req, res, next) => {
  const { body } = req;
  const { err, addBook: book } = await addBook(body);
  if (err) next();
  else res.send("Book Is Added");
};

// This Controller will get book from db
const getBookFromTitle = async (req, res, next) => {
  const { params } = req;
  const { title } = params;
  const { err, getBook: book } = await redisGet(title);
  if (err) next(err);
  else if (book) res.send(book);
  else {
    const { err, getBook: book } = await getBook(title);
    if (err) next();
    else {
      const { err, setBook } = await redisSet(title, JSON.stringify(book));
      if (err) next(err);
      res.send(book);
    }
  }
};

// Exporting Controllers
export { postBook, getBookFromTitle };

import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// Components
import { books } from "./books";
import Book from "./book";

const bookList = books.map((book) => {
  return <Book key={book.id} {...book} />;
});

function BookList() {
  return <section className="booklist">{bookList}</section>;
}

ReactDOM.render(<BookList />, document.getElementById("root"));

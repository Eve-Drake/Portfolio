import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = (props) =>{
  const [books, setBooks] = useState([
    {
      title: "Hitchhikers Guide to the Galaxy",
      author: "Douglas Adams",
      pages: 208,
      genres: "Si-Fi",
      currentPage:  208,
      id: 0
    },

  ])
  return(
    <BookContext.Provider value={[books, setBooks]}>
        {props.children}
    </BookContext.Provider>
  );
}
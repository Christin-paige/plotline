import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Search input state

  const fetchBooks = async () => {
    if (!searchTerm.trim()) {
      console.log("⚠️ Search term is empty. Clearing books.");
      setBooks([]);
      return;
    }
console.log("fetch books for:",searchTerm)

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
          searchTerm
        )}&key=${apiKey}`
      );
      const data = await response.json();
      if (Array.isArray(data.items)) {
        setBooks(data.items);
      } else {
        console.error("Books is not an array: ", data);
        setBooks([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
        fetchBooks();
    }
   
  }, [searchTerm]);

  return (
    <BookContext.Provider value={{ books, searchTerm, setSearchTerm,}}>
      {children}
    </BookContext.Provider>
  );
}

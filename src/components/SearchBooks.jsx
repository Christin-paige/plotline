import React from "react";
import { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function SearchBooks() {
  const [input, setInput] = useState("");
  const { setSearchTerm } = useContext(BookContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === "") {
      return;
    }
    setSearchTerm(input);
  }

  return (
    <div className="bg-gray-800 px-4 py-3">
      <form onSubmit={handleSubmit}>
        <input
          className="shadow appearance-none w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={input}
          placeholder="search by title, author, genre"
          onChange={(e) => setInput(e.target.value)}
          style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
}

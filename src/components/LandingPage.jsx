import { useState } from 'react';
import React from 'react';

export default function LandingPage({ books, setSearch }) {
  const [search, setLocalSearch] = useState('')
  

function filteredBooks(){ 
const result = books.filter((book) => 
book.volumeInfo.title.toLowerCase().includes(search.toLowerCase())
)
console.log(books)
console.log(result)
return result;
}
  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="search"
          >
            search for a book
          </label>
          <input
            className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bookSearch"
            type="text"
            value={search}
            placeholder="search by title, author, genre"
            onChange={(e) => {
              setLocalSearch(e.target.value);
              setSearch(e.target.value);
            }}
            style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
          />
        </div>
      </form>

      <ul>
        {filteredBooks().length > 0 ? (
          filteredBooks().map((book, index) => (
            <li key={index} style={{ marginBottom: '20px', listStyle: 'none', display: 'flex', alignItems: 'center' }}>
              {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
                   <img
                   src={book.volumeInfo.imageLinks.thumbnail}
                   alt={`${book.volumeInfo.title} cover`}
                   style={{ width: '100px', height: 'auto', marginRight: '10px' }}
                 />
              ) : (
                <div
                style={{
                  width: '100px',
                  height: '150px',
                  backgroundColor: '#f0f0f0',
                  display: 'inline-block',
                  marginRight: '10px',
                }}
              >
                No image
                </div>
              )}
              <div>
            <strong>{book.volumeInfo.title}</strong> 
              by: {book.volumeInfo.authors}
                           {book.volumeInfo.authors
                               ? book.volumeInfo.authors.join(', ')
                               : 'Unknown Author'}
                                 </div>
         </li>
       

        
     
     
        ))
      ):(
        <p>no books found.</p>
      )}
      </ul>
      
    </>
  );
}

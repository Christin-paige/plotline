import { useState } from 'react';
import React from 'react';

export default function LandingPage({ books }) {
  console.log("books received:", books);
   
 
return(
      <ul>
        {books.length > 0 ? (
          books.map((book, index) => (
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
             <p> by: {book.volumeInfo.authors}</p>
                          
                                 </div>
         </li>
        ))
      ):(
        <p>no books found.</p>
      )}
      </ul>
  );
}

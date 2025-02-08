import { useState } from 'react';
import React from 'react';
import Modal from './bookCard/Modal';

export default function LandingPage({ books }) {
  console.log("books received:", books);

  const[open, setOpen] = useState(false);
  const[selectedBook, setSelectedBook] = useState(null);

  const handleOpen = (book) => {
    setSelectedBook(book);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedBook(null)
  }
   
 
return(
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6" >
        {books.length > 0 ? (
          books.map((book, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-4 rounded-lg shadow-md" 
              onClick={() => handleOpen(book)}
              >
              <h2 className="text-lg font-semibold">{book.volumeInfo.title}</h2>
              <p className="text-sm text-gray-700">
                <strong>Author:</strong> {book.volumeInfo.authors?.join(",")||"Unknown"}
              </p>
              {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
                   <img
                   className="w-full h-38 sm:h-48 object-cover"
                   src={book.volumeInfo.imageLinks.thumbnail}
                   alt={`${book.volumeInfo.title} cover`}
                  
                  
                 />
              ) : (
                <div className="px-6 py-4">
                No image
                </div>
              )}
             
       
              </div>
               
            
        
        ))
      ):(
        <p>no books found.</p>
      )}

      {open && selectedBook && (
       <Modal isOpen={open} book={selectedBook} onClose={handleClose} />
      )}
      </div>

     
  );
}

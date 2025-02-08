import React from 'react';

export default function Modal({isOpen, onClose, book}) {

   if(!isOpen) return null;


return(
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
        >
          ❌
        </button>

        {/* Book Details */}
        <h2 className="text-xl font-bold">{book.volumeInfo.title}</h2>
        <p className="text-gray-700 text-base pt-4">
          {book.volumeInfo.description || "No description available."}
        </p>
      </div>
    </div>
)

   
}
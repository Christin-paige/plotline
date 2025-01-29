import { useState } from 'react';
import React from 'react';

export default function SearchBooks({setSearchTerm}){
    const [input, setInput] = useState('')
  
function handleSubmit(e){
  e.preventDefault();
  console.log("✅ Search button clicked. Input:", input); 
  if (input.trim()===""){
    console.log('search input is empty')
    return;
  }
  setSearchTerm(input)
 
}

      return (
        
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
           
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="search"
              >
                search for a book
              </label>
              <input
                className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={input}
                placeholder="search by title, author, genre"
                onChange={(e) => setInput(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
              />
              <button type="submit">Search</button>
          
          </form>
          )
}
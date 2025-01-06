import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [search, setSearch] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=search+terms&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="search"
          >
            search for a book
          </label>
          <input
            class="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bookSearch"
            type="text"
            placeholder="search by title, author, genre"
          ></input>
        </div>
      </form>
    </>
  );
}

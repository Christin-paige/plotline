import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import RecommendedBooks from './components/RecommendedBooks';
import './index.css';

export default function App() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const[books, setBooks] = useState([])
    const [search, setSearch] = useState(''); // Search input state
  
    useEffect(() => {
      if (search.trim() === '') {
        setBooks([]); // Clear books if no search query
        return;
      }

      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
          search
        )}&key=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          if(Array.isArray(data.items)){
            setBooks(data.items)
          }else{
            console.error("Books is not an array: ", data)
            setBooks([])
          }
         
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [search]);

  return (
    <>
      <NavBar />
      <LandingPage books = {books} setSearch = {setSearch}/>
      <RecommendedBooks />
    </>
  );
}

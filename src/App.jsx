import { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import RecommendedBooks from './components/RecommendedBooks';
import SearchBooks from './components/SearchBooks';
import './index.css';

export default function App() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const[books, setBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState(''); // Search input state
  
    useEffect(() => {
      console.log("current search term:", searchTerm)
      },[searchTerm]);

      useEffect(() => {
        console.log("🔥 useEffect triggered! Current search term:", searchTerm);
    
        if (!searchTerm.trim()) {
          console.log("⚠️ Search term is empty. Clearing books.");
          setBooks([]);
          return;
        }
    
        console.log("📚 Fetching books for:", searchTerm);

      console.log('fetching books for:', searchTerm)

      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
          searchTerm
        )}&key=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("fetched data:", data)
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
    }, [searchTerm]);

  return (
    <>
      <NavBar />
      <SearchBooks setSearchTerm={setSearchTerm} />
      <LandingPage books = {books} />{/*take the button and make it's own component and maybe add a modal here as a child to button */} 
      <RecommendedBooks />
    </>
  );
}

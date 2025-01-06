import {useState, useEffect} from 'react';

//should the books read be indicated on the landing page?
//student searches for a book, it comes up, student clicks "read" and the book is populated in the favbooks page?

//should there be a new array on the landing page that holds the books read?
const [booksRead, setBooksRead] = useState([]);
const [favoriteBook, setFavoriteBook] = useState([]);

const apiKey = import.meta.env.VITE_API_KEY;





function handleFav(event) {

    setFavoriteBook(prev => [...prev, "new book"])
    event.preventDefault()
}
export default function FavoriteBooks(){
    return (
        <>

        </>
    )
}
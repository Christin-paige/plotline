import { useState } from 'react';
import { BookContext } from "../context/BookContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";


export default function BookCard({ books }){
    const { books } = useContext(BookContext);
   
let emptyHeart = <FaRegHeart />
let filledHeart = <FaHeart />

    let heartIcon = books.isFavorite ? emptyHeart : filledHeart;

    function toggleFavorite(){
        setBookCard(prevBookCard => ({
                ...prevBookCard,
                isFavorite: ! prevBookCard.isFavorite
            
        }))
    }

    return (
        <>
        <div>
            {books}
        </div>
        </>
    )
}
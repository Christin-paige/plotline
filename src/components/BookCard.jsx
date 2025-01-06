import { useState } from 'react'
//import 2 images - filled heart, empty heart


export default function BookCard(){
    const[bookCard, setBookCard] = useState({
        title: "",
        author: "",
        genre: "",
        isFavorite: false,
    });

    let heartIcon = bookCard.isFavorite ? emptyHeart : filledHeart;

    function toggleFavorite(){
        setBookCard(prevBookCard => ({
                ...prevBookCard,
                isFavorite: ! prevBookCard.isFavorite
            
        }))
    }

    return (
        <>
        </>
    )
}
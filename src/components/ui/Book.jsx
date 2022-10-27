import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';
import Rating from './Rating';

const Book = ({ book }) => {
    const [img, setImg] = useState();


    useEffect(() => {
        setTimeout(() => {
            const image = new Image()
            image.src = book.url
            image.onload = () => {
                setImg(image)
            }
        }, 500);
    })

    return (

        <div className="book">
            {
                img ? <> <Link to={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img src={book.url} alt="" />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className='book__title--link'>
                    {book.title}
                </Link>
            </div>
            <Rating rating={book.rating}/>
            <Price originalPrice={book.originalPrice} salePrice={book.salePrice} /> </> : 
            <> <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div></>
            }

        </div>
    );
}

export default Book;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Book from '../components/ui/Book';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';

const BookInfo = ({ books, addToCart, cart }) => {
    const { id } = useParams()
    const location = useLocation();
    const book = books.find(book => +book.id === +id)

    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    function addBookToCart(book) {
        addToCart(book)
    }

    function isDupe() {
        return cart.find(book => book.id === +id)
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="books__selected--top">
                            <Link to="/books" className='book__link'>
                                <FontAwesomeIcon icon='arrow-left'></FontAwesomeIcon>
                            </Link>

                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    {book.title}
                                </h2>
                                <Rating rating={4.5} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis omnis enim facilis! Nostrum aliquid fuga voluptatum sed expedita? Veniam, maxime quos consequatur facilis voluptatum dolorem? Saepe, officia! Eaque, minus porro?
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis omnis enim facilis! Nostrum aliquid fuga voluptatum sed expedita? Veniam, maxime quos consequatur facilis voluptatum dolorem? Saepe, officia! Eaque, minus porro?
                                    </p>
                                </div>
                                {
                                    isDupe() ? <Link to='/cart'><button className="btn">Checkout</button> </Link>: <button className="btn" onClick={() => addBookToCart(book)}>
                                        Add to Cart
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                            {
                                books.filter(book => book.rating === 5 && +book.id !== +id)
                                    .slice(0, 4)
                                    .map((book) => {
                                        return <Book book={book} key={book.id} />
                                    })
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;
